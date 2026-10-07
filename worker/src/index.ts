/**
 * POST /api/contact: human check, then validate, then forward to a Discord webhook.
 *
 * Same shape as the contact route in bulletin-mail. The human check runs first, so a bot
 * gets no field-level feedback and nothing unverified reaches Discord. It fails closed:
 * no secret, no token, or no answer from siteverify all mean the message is refused.
 *
 * The form's script asks for JSON and shows errors in place. A plain form post (no
 * script) gets a redirect to /thanks/ or a small error page instead.
 */

interface Env {
	TURNSTILE_SECRET_KEY?: string
	TURNSTILE_HOSTNAMES?: string
	DISCORD_WEBHOOK_URL?: string
}

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const HUMAN_CHECK_FAILED = "We couldn't confirm you're a person. Please try the check again and resend."
const SEND_FAILED = "Your message didn't go through on our end. Please try again in a minute, or call us."

async function verifyTurnstile(env: Env, token: string, remoteIp: string | null): Promise<boolean> {
	const hostnames = (env.TURNSTILE_HOSTNAMES ?? '').split(',').map((h) => h.trim()).filter(Boolean)
	if (!env.TURNSTILE_SECRET_KEY || hostnames.length === 0) return false
	if (!token || token.length > 2048) return false

	const form = new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: token })
	if (remoteIp) form.set('remoteip', remoteIp)

	try {
		const res = await fetch(SITEVERIFY_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: form,
			signal: AbortSignal.timeout(10_000),
		})
		if (!res.ok) return false
		const data = (await res.json()) as { success?: boolean; hostname?: string }
		return data.success === true && hostnames.includes(data.hostname ?? '')
	} catch {
		// Siteverify unreachable. Refuse rather than wave the message through.
		return false
	}
}

const escapeHtml = (s: string): string => s.replace(/[&<>"']/g, (ch) => `&#${ch.charCodeAt(0)};`)

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const wantsJson = (request.headers.get('Accept') ?? '').includes('application/json')

		const fail = (status: number, error: string): Response => {
			if (wantsJson) return Response.json({ ok: false, error }, { status })
			return new Response(
				`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">` +
					`<title>Message not sent - Left Join Studio</title>` +
					`<body style="font-family:system-ui,sans-serif;max-width:32rem;margin:4rem auto;padding:0 1rem">` +
					`<h1>Message not sent</h1><p>${escapeHtml(error)}</p><p><a href="/contact/">Back to the form</a></p>`,
				{ status, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
			)
		}

		if (request.method !== 'POST') {
			return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } })
		}

		let form: FormData
		try {
			form = await request.formData()
		} catch {
			return fail(400, 'That form could not be read.')
		}
		const field = (name: string): string => {
			const v = form.get(name)
			return typeof v === 'string' ? v.trim() : ''
		}

		const humanOk = await verifyTurnstile(env, field('cf-turnstile-response'), request.headers.get('CF-Connecting-IP'))
		if (!humanOk) return fail(403, HUMAN_CHECK_FAILED)

		const name = field('name')
		const email = field('email')
		const message = field('message')
		if (!name) return fail(400, 'Please add your name or company.')
		if (name.length > 200) return fail(400, 'That name is too long.')
		if (email.length > 320 || !EMAIL_RE.test(email)) return fail(400, 'Please enter a valid email address.')
		if (!message) return fail(400, 'Please add a short message.')
		if (message.length > 4000) return fail(400, 'That message is too long. Please keep it under 4,000 characters.')

		if (!env.DISCORD_WEBHOOK_URL) {
			console.error('DISCORD_WEBHOOK_URL is not set')
			return fail(502, SEND_FAILED)
		}
		const payload = {
			// Nothing a visitor types can ping anyone.
			allowed_mentions: { parse: [] },
			embeds: [
				{
					title: 'LJS Contact Received',
					description: message,
					color: 0xe85d00,
					fields: [
						{ name: 'Name', value: name, inline: true },
						{ name: 'Email', value: email, inline: true },
					],
					timestamp: new Date().toISOString(),
				},
			],
		}
		try {
			const res = await fetch(env.DISCORD_WEBHOOK_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
				signal: AbortSignal.timeout(10_000),
			})
			if (!res.ok) {
				console.error('Discord webhook failed:', res.status, await res.text())
				return fail(502, SEND_FAILED)
			}
		} catch (err) {
			console.error('Discord webhook error:', err)
			return fail(502, SEND_FAILED)
		}

		if (wantsJson) return Response.json({ ok: true })
		return new Response(null, { status: 303, headers: { Location: '/thanks/' } })
	},
}
