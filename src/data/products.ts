export type Product = {
  slug: string,
  name: string,
  kind: string,
  audience: string,
  line: string,
  body: string,
  points: string[],
  url: string,
  host: string,
  cta: string,
  tier: 'flagship' | 'business' | 'builder',
}

export const jesse = {
  phone: '(224) 249-5897',
  phoneHref: 'tel:+12242495897',
  url: '/jesse',
  trades: [
    'Roofing', 'Plumbing', 'Heating and cooling', 'Electrical', 'General contracting',
    'Concrete and masonry', 'Landscaping', 'Painting', 'Flooring', 'Windows and doors',
    'Garage doors', 'Pest control', 'Excavation and site work', 'Equipment and supply',
  ],
}

const all: Product[] = [
  {
    slug: 'jesse',
    name: 'Jesse',
    kind: 'AI receptionist',
    audience: 'For the trades',
    line: 'Never miss a job call again.',
    body: 'Jesse answers your phone when you can\'t. It talks with your customer, gets the job details, and emails you the rundown before you\'re off the ladder.',
    points: [
      'Your own local number, answered on the first ring at any hour',
      'Knows your services, hours and service area from your website',
      'An email after every call: who, what, where and how urgent',
      'Free for 30 days, with no card on file',
    ],
    url: '/jesse',
    host: 'leftjoinstudio.com/jesse',
    cta: 'Meet Jesse',
    tier: 'flagship',
  },
  {
    slug: 'saleflow',
    name: 'SaleFlow',
    kind: 'Sales workflow',
    audience: 'For sales reps',
    line: 'The five things that move your deals today.',
    body: 'A phone-first app that runs the whole deal, from an uploaded lead list to collections. Each morning it tells the rep what to do next, and the rep reshapes the workflow by talking to it.',
    points: [
      'A daily short list ranked by what moves deals',
      'One zoomable view of the whole pipeline',
      'Change the process by asking, not by filing a ticket',
    ],
    url: 'https://askscottpierce.com/salesflow',
    host: 'askscottpierce.com/salesflow',
    cta: 'Try the demo',
    tier: 'business',
  },
  {
    slug: 'memotron',
    name: 'Memotron',
    kind: 'Request board',
    audience: 'For executives and their assistants',
    line: 'Say it once. It lands on the right card.',
    body: 'An executive talks, types or emails a memo. Memotron reads it against the board they share with their assistant and files each request where it belongs.',
    points: [
      'Voice, video, text or email in',
      'Questions come back as one-tap answers',
      'Both people see one board, each from their own side',
    ],
    url: 'https://askscottpierce.com/memotron',
    host: 'askscottpierce.com/memotron',
    cta: 'Try the demo',
    tier: 'business',
  },
  {
    slug: 'tasks',
    name: 'Tasks',
    kind: 'Task board',
    audience: 'For small teams',
    line: 'Tell it what you finished. The cards move.',
    body: 'A kanban board with an assistant in the sidebar. Everyday commands run on a small model inside your browser, and a board can be end-to-end encrypted with a passphrase.',
    points: [
      'Plain-English updates instead of dragging cards',
      'Optional end-to-end encryption',
      'Team boards and an audit log',
    ],
    url: 'https://askscottpierce.com/tasks',
    host: 'askscottpierce.com/tasks',
    cta: 'Open Tasks',
    tier: 'business',
  },
  {
    slug: 'relay-tty',
    name: 'relay-tty',
    kind: 'Remote terminal',
    audience: 'For developers',
    line: 'Check on your AI coding agents from your phone.',
    body: 'Run any coding agent on your own computer and watch it live from any browser. Scan a QR code and you\'re in. Nothing on your screen is stored.',
    points: [
      'One install, one command, one link that never changes',
      'Works with any tool that runs in a terminal',
      'Free for individuals',
    ],
    url: 'https://relaytty.com',
    host: 'relaytty.com',
    cta: 'Visit relaytty.com',
    tier: 'builder',
  },
  {
    slug: 'thunder',
    name: 'Thunder',
    kind: 'Agent control plane',
    audience: 'For engineering teams',
    line: 'A task board your coding agents work from.',
    body: 'Projects, tasks and the agents working them in one place, running on your own Cloudflare account. People use a board and agents use the same tools through an API.',
    points: [
      'Runs in your account, not ours',
      'Every agent gets its own copy of the repo',
      'A second agent reviews the work before a person does',
    ],
    url: 'https://thunder.ljs.app',
    host: 'thunder.ljs.app',
    cta: 'Open Thunder',
    tier: 'builder',
  },
  {
    slug: 'max-pane',
    name: 'Max Pane',
    kind: 'macOS app',
    audience: 'For developers',
    line: 'Every agent session in its own lane.',
    body: 'A fullscreen Mac app that lines up terminals and web pages as columns on one strip, and shows which agent is waiting on you.',
    points: [
      'Terminals and web pages side by side',
      'The blocked session is the one that pulses',
      'Installs with Homebrew',
    ],
    url: 'https://github.com/ddrscott/max-pane',
    host: 'github.com/ddrscott/max-pane',
    cta: 'Get Max Pane',
    tier: 'builder',
  },
]

// Which tiers the site shows. Jesse always leads.
const SHOWN: Product['tier'][] = ['flagship', 'business', 'builder']

export const products = all.filter(p => SHOWN.includes(p.tier))
export const flagship = all[0]
export const others = products.filter(p => p.tier !== 'flagship')
