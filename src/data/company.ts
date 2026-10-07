// Facts about the company, kept in one place so every page says the same thing.
// Nothing here is a projection or a round-up. If it isn't true yet, it doesn't go in.

export const company = {
  name: 'Left Join Studio',
  legal: 'Left Join Studio, Inc.',
  street: '2501 Chatham Rd #5352',
  city: 'Springfield, IL 62704',
  country: 'United States',
  phone: '+1 (847) 450-0523',
  phoneHref: 'tel:+18474500523',
  since: 1998,
}

export type Industry = { sector: string, field: string, work: string }

// Work shipped for clients. Names stay out of it: they're under NDA.
export const industries: Industry[] = [
  { sector: 'Construction', field: 'Bids and contracts', work: 'Every subcontract read before the bid, with the risky terms flagged and the reason given.' },
  { sector: 'Pharma', field: 'Clinical research', work: 'A tool that finds patients who qualify for a new treatment, built under HIPAA with a signed Business Associate Agreement.' },
  { sector: 'Retail data', field: 'Consumer goods', work: 'Search across every internal document, and plain-English answers from the company\'s own numbers.' },
  { sector: 'Hedge funds', field: 'Market data', work: 'Data pipelines for a fund, where a late or wrong number costs real money.' },
  { sector: 'Ad tech', field: 'Media buying', work: 'Ad data for a media-buying platform, at the volume ad impressions show up.' },
  { sector: 'Media', field: 'News', work: 'Native iOS and Android reading apps for a major-market newspaper.' },
  { sector: 'Publishing', field: 'Digital books', work: 'eBook distribution to readers in 196 countries.' },
  { sector: 'Telecom', field: 'Cellular billing', work: 'Billing for a cellular carrier, where every minute got counted and customers checked.' },
]

export type Step = { title: string, body: string }

export const steps: Step[] = [
  { title: 'Tell us the job', body: 'Thirty minutes, free, no slides. We\'ll tell you on that call whether it\'s worth your money.' },
  { title: 'Try a working version', body: 'Something your team can click or call. You judge the software, not a proposal about it.' },
  { title: 'Use it for a week', body: 'Your team tells us what to change. Then you decide what comes next, with a fixed price in writing.' },
]

export type Objection = { q: string, a: string }

// The questions a careful buyer asks about a studio they just met.
export const objections: Objection[] = [
  {
    q: 'I just met you at a booth. Is any of this real?',
    a: 'Don\'t take our word for it. The demo line is the product itself, and the number on this page is answering right now. Call it before you call us.',
  },
  {
    q: 'You\'re a small company. What happens if you\'re gone?',
    a: 'On custom work, the code, the docs and the training material are delivered to you. It\'s built on common tools, so any capable developer can pick it up where we left off. You\'re never renting your own software from us.',
  },
  {
    q: 'What does it cost, and how do I know it won\'t balloon?',
    a: 'Jesse is free for a month with no card on file, so you find out what it\'s worth before you pay anything. Custom work is a fixed price agreed before we start. We don\'t bill by the hour, so a slow week is our problem and not yours.',
  },
  {
    q: 'Who am I actually signing with?',
    a: 'Left Join Studio, Inc., a corporation with a street address and a phone number at the bottom of every page. Scope and deliverables are written down before any work starts.',
  },
  {
    q: 'Can you handle sensitive data?',
    a: 'Yes. We\'ve built under HIPAA with a signed Business Associate Agreement, and we\'re glad to sign an NDA before you tell us anything. Where it matters, custom software can run in your own cloud account, so the data stays with you.',
  },
  {
    q: 'We already have a big vendor or an IT team.',
    a: 'Keep them. We work alongside the firm you need for compliance, support or scale, and hand our part over when it\'s done. You get our speed and their coverage.',
  },
  {
    q: 'AI gets things wrong. What then?',
    a: 'It does, so we build for it. Jesse sends you the details of every call, so you see what it heard, and you can correct anything it has wrong about your business. On custom work, a person signs off wherever a mistake would cost you.',
  },
  {
    q: 'What if AI isn\'t the right answer for us?',
    a: 'Then we\'ll say so on the first call, which is free. Plenty of problems are better solved by a spreadsheet, a form or a phone call, and telling you that costs us less than building the wrong thing.',
  },
]
