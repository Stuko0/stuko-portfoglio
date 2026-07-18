export const site = {
  name: 'Alexander Porcel',
  shortName: 'Stuko',
  handle: '@stuko',
  title: 'Alexander Porcel — AI Systems Engineer',
  description:
    'AI Systems Engineer building distributed backends, GPU inference systems, and high-throughput data pipelines. Golang, Python, CUDA, Kubernetes.',
  location: 'Cochabamba, BO',
  email: 'avplaying@gmail.com',
  phone: '+591 6760 2979',
  tagline: 'Building Systems That Think\nFast at Scale',
  intro:
    'AI Systems Engineer con ~4 años construyendo backends distribuidos,\ninferencia GPU y pipelines de datos de alto rendimiento.',
  role: 'AI Systems Engineer | Distributed Systems | GPU Inference | Kubernetes',
};

export const navLinks = [
  { href: '#home', label: 'Home', icon: 'home' },
  { href: '#experience', label: 'Experience', icon: 'briefcase' },
  { href: '#works', label: 'Selected Works', icon: 'layers' },
  { href: '#services', label: 'Services', icon: 'sparkles' },
  { href: '#about', label: 'About', icon: 'user' },
  { href: '#testimonial', label: 'Testimonial', icon: 'quote' },
  { href: '#partners', label: 'Stack', icon: 'users' },
  { href: '#awards', label: 'Awards', icon: 'award' },
  { href: '#pricing', label: 'Engagement', icon: 'tag' },
  { href: '#faqs', label: 'FAQs', icon: 'help' },
  { href: '#contact', label: 'Contact', icon: 'mail' },
];

export const tags = [
  'Distributed Systems',
  'GPU Inference',
  'AI Agents',
  'Kubernetes',
];

export const stats = [
  { label: 'Years Building Systems', value: 4, suffix: '+' },
  { label: 'Msg/s Throughput', value: 15, suffix: 'K+' },
];

export const experiences = [
  {
    company: 'Arquant Argentina',
    role: 'AI & Data Engineer',
    period: 'Aug 2025 – Present',
  },
  {
    company: 'Purple MangoCorp',
    role: 'Mobile Architect (Flutter)',
    period: 'Apr 2023 – Present',
  },
  {
    company: 'Freelance',
    role: 'Fullstack Developer',
    period: 'Feb 2022 – Present',
  },
];

export const works = [
  {
    title: 'Lydia Agent',
    category: 'AI Agent · Open Source CLI',
    date: '2025 – Present',
    href: 'https://lydia-agent.stuko.dev',
    gradient: 'linear-gradient(135deg, #232136 0%, #c4a7e7 35%, #c41e3a 70%, #0a0508 100%)',
    blurb:
      'Local-first AI teammate: persistent memory, skills, sandboxed subagents. Runs on your machine.',
  },
  {
    title: '!Scarlet',
    category: 'Distributed Systems · Geospatial',
    date: '2024 – Present',
    href: '#contact',
    gradient: 'linear-gradient(160deg, #1a0f20 0%, #7a1528 40%, #c41e3a 70%, #0d0508 100%)',
    blurb:
      'Event-driven wildfire monitoring for Bolivia — satellite telemetry, Golang, gRPC, K8s, PostGIS.',
  },
  {
    title: 'Arquant GPU Inference',
    category: 'AI Systems · Financial Data',
    date: '2025 – Present',
    href: '#contact',
    gradient: 'linear-gradient(145deg, #0a1628 0%, #1e4d6b 40%, #c4a35a 75%, #0a0508 100%)',
    blurb:
      'GPU inference across RTX A6000 nodes + StarRocks/ES OLAP for sub-second financial queries.',
  },
];

export const services = [
  {
    id: 1,
    title: 'AI Systems',
    items: [
      'GPU-accelerated inference pipelines',
      'LLM / TensorFlow model deployment',
      'AI agents & automation workflows',
    ],
  },
  {
    id: 2,
    title: 'Distributed Backends',
    items: [
      'High-throughput data pipelines (Golang)',
      'gRPC / microservices architecture',
      'Real-time stream processing (CUDA)',
    ],
  },
  {
    id: 3,
    title: 'Infrastructure',
    items: [
      'Kubernetes + GitOps (ArgoCD)',
      'Docker, Linux, Envoy Proxy',
      'Observability & resilient networking',
    ],
  },
  {
    id: 4,
    title: 'Product Engineering',
    items: [
      'Flutter Clean Architecture',
      'Fullstack web (React / Astro)',
      'Performance & scalability audits',
    ],
  },
];

export const about = {
  title: 'Behind every reliable system is a clear architecture',
  text: 'Diseño e implemento sistemas que procesan datos a escala: pipelines financieros de alto volumen, inferencia GPU de baja latencia y agentes de IA locales. Me especializo en Golang, Python y CUDA, con infraestructura Kubernetes lista para producción. De Cochabamba para el mundo — remote-first.',
};

export const techStack = [
  { name: 'Golang', desc: 'Backends concurrentes y sistemas distribuidos' },
  { name: 'Python', desc: 'ML, data pipelines y tooling de IA' },
  { name: 'CUDA', desc: 'Algoritmos paralelos e inferencia GPU' },
  { name: 'Kubernetes', desc: 'Orquestación, GitOps y ArgoCD' },
  { name: 'TensorFlow', desc: 'Modelos y despliegue de inferencia' },
  { name: 'StarRocks', desc: 'OLAP analítico de sub-segundo' },
  { name: 'PostgreSQL', desc: 'Datos relacionales y PostGIS' },
  { name: 'Flutter', desc: 'Mobile multiplataforma a escala' },
];

export const testimonials = [
  {
    quote:
      'Alexander delivered a GPU inference path that cut our exploration queries from tens of seconds to 1–2s. Clear architecture, solid ownership.',
    name: 'Engineering Lead',
    role: 'Financial Data Platform',
    initial: 'E',
  },
  {
    quote:
      'The Flutter Clean Architecture migration paid off immediately — faster feature delivery and a codebase the whole team can reason about.',
    name: 'Product Manager',
    role: 'Purple MangoCorp',
    initial: 'P',
  },
  {
    quote:
      'Lydia feels like a real teammate in the terminal. Local-first, memory that sticks, and skills I can actually extend.',
    name: 'Indie Hacker',
    role: 'Early Lydia User',
    initial: 'I',
  },
];

export const partners = ['ARQUANT', 'MANGO', 'K8S', 'CUDA', 'GITHUB'];

export const process = [
  {
    step: 'Step 1',
    title: 'Scope &\nConstraints',
    text: 'Aclaro objetivos, latencia, volumen de datos y límites de infraestructura antes de escribir código.',
  },
  {
    step: 'Step 2',
    title: 'Architecture\n& Contracts',
    text: 'Diseño APIs, flujos de datos y límites de servicio — gRPC, eventos, storage y topología K8s.',
  },
  {
    step: 'Step 3',
    title: 'Build &\nIterate',
    text: 'Implemento en verticales cortos: pipeline, inferencia, observability. Métricas desde el día uno.',
  },
  {
    step: 'Step 4',
    title: 'Harden &\nShip',
    text: 'Load tests, GitOps, runbooks. Dejo el sistema operable y documentado para el equipo.',
  },
];

export const awards = [
  {
    number: '01',
    title: 'Unihackz 2024 — Hackathon',
    date: '01/2024',
  },
  {
    number: '02',
    title: 'Unihackz 2023 — Hackathon',
    date: '01/2023',
  },
  {
    number: '03',
    title: 'Cisco — Endpoint Security',
    date: '04/2025',
  },
  {
    number: '04',
    title: 'Cisco — Networking Devices & Initial Configuration',
    date: '11/2024',
  },
];

export const pricingPlans = [
  {
    id: 'consulting',
    name: 'Consulting',
    blurb: 'Architecture reviews, performance debugging, short-term systems work.',
    price: '$65',
    unit: '/ hour',
    features: [
      'Architecture & design reviews',
      'GPU / pipeline performance audits',
      'Kubernetes & GitOps guidance',
      'Remote collaboration',
      'Business days availability',
      'Async updates via Git / docs',
    ],
  },
  {
    id: 'retainer',
    name: 'Retainer',
    blurb: 'Ongoing ownership of AI systems, backends, or agent infrastructure.',
    price: '$4.5k',
    unit: '/ month',
    features: [
      'Part-time systems ownership',
      'AI agents & inference pipelines',
      'Distributed backends (Go / Python)',
      'Infra as code + observability',
      'Priority response window',
      'Monthly roadmap & metrics review',
    ],
  },
];

export const faqs = [
  {
    q: 'What kind of work do you take on?',
    a: 'AI systems engineering: distributed backends, GPU inference, data pipelines, AI agents, and production Kubernetes. Also Flutter architecture when the product needs it.',
  },
  {
    q: 'What is your typical engagement length?',
    a: 'Consulting sprints of 1–4 weeks for focused problems, or retainers for ongoing systems ownership. Larger builds (like !Scarlet-class systems) are scoped per milestone.',
  },
  {
    q: 'Which stack do you prefer?',
    a: 'Golang and Python for backends and AI, CUDA for parallel workloads, Kubernetes + ArgoCD for deploy, StarRocks/Elasticsearch/PostgreSQL for data. Flutter + React when UI is in scope.',
  },
  {
    q: 'Do you work fully remote?',
    a: 'Yes. Based in Cochabamba, Bolivia — remote-first with async-friendly communication and clear written architecture.',
  },
  {
    q: 'What is Lydia Agent?',
    a: 'An open-source, local-first AI teammate CLI. Persistent memory, extensible skills, sandboxed subagents. Try it at lydia-agent.stuko.dev.',
  },
];

export const budgetOptions = [
  '< $2,000',
  '$2,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000 – $40,000',
  '> $40,000',
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Stuko0' },
  { label: 'Lydia', href: 'https://lydia-agent.stuko.dev' },
  { label: 'Email', href: 'mailto:avplaying@gmail.com' },
  { label: 'Web', href: 'https://stuko.dev' },
];

export const education = {
  degree: 'Bachelor in Systems Engineering',
  school: 'Universidad Franz Tamayo',
  period: '02/2022 – 08/2026',
};
