import { t, type Locale } from '../i18n/translations';

let currentLocale: Locale = 'en';

export { Locale };
export function setLocale(locale: Locale) {
  currentLocale = locale;
}

const tr = (path: string) =>
  path.split('.').reduce((obj, key) => (obj as any)?.[key], t(currentLocale));

// ============================================================
// ALL EXPORTS AS FUNCTIONS — sections call them after setLocale
// ============================================================

export function site() {
  const s = tr('site') as any;
  return s;
}

export function headings() {
  return tr('headings') as any || {};
}

export function navLinks() {
  const n = tr('nav') as any;
  return [
    { href: '#home', label: n.home, icon: 'home' },
    { href: '#experience', label: n.experience, icon: 'briefcase' },
    { href: '#works', label: n.works, icon: 'layers' },
    { href: '#services', label: n.services, icon: 'sparkles' },
    { href: '#about', label: n.about, icon: 'user' },
    { href: '#partners', label: n.stack, icon: 'users' },
    { href: '#awards', label: n.awards, icon: 'award' },
    { href: '#pricing', label: n.engagement, icon: 'tag' },
    { href: '#faqs', label: n.faqs, icon: 'help' },
    { href: '#contact', label: n.contact, icon: 'mail' },
  ];
}

export function tags(): string[] { return tr('hero.tags'); }
export function stats() { return tr('stats'); }
export function experiences() { return tr('experiences.items'); }
export function works() { return tr('works.items'); }
export function services() { return tr('services.groups'); }
export function about() { return tr('about'); }
export function education() { return tr('education'); }
export function techStack() { return tr('techStack.items'); }
export function partners(): string[] { return tr('partners.items'); }
export function process() { return tr('process.items'); }
export function awards() { return tr('awards.items'); }
export function pricingPlans() { return tr('pricing.plans'); }
export function faqs() { return tr('faqs.items'); }
export function socials() { return tr('socials'); }
export function budgetOptions(): string[] {
  return ['< $2,000', '$2,000 – $5,000', '$5,000 – $15,000', '$15,000 – $40,000', '> $40,000'];
}
