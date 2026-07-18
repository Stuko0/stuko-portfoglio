import { useEffect, useState } from 'preact/hooks';

interface NavLink {
  href: string;
  label: string;
  icon: string;
}

interface Props {
  locale?: string;
  navLinks?: NavLink[];
}

const icons: Record<string, string> = {
  home: '⌂',
  briefcase: '⚒',
  layers: '▦',
  sparkles: '✦',
  user: '◉',
  quote: '❝',
  users: '◎',
  award: '◆',
  tag: '◈',
  help: '?',
  mail: '✉',
};

const defaultNavLinks: NavLink[] = [
  { href: '#home', label: 'Home', icon: 'home' },
  { href: '#experience', label: 'Experience', icon: 'briefcase' },
  { href: '#works', label: 'Works', icon: 'layers' },
  { href: '#about', label: 'About', icon: 'user' },
  { href: '#pricing', label: 'Engagement', icon: 'tag' },
  { href: '#contact', label: 'Contact', icon: 'mail' },
];

export default function RightNav({ navLinks: links, locale = 'en' }: Props) {
  const [active, setActive] = useState('#home');

  const nav = links || defaultNavLinks;
  const otherLang = locale === 'en' ? 'es' : 'en';
  const langLabel = locale === 'en' ? 'ES' : 'EN';

  useEffect(() => {
    const sections = nav
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [nav]);

  return (
    <ul class="right-nav nav-scroll">
      {nav.map((link) => (
        <li key={link.href}>
          <a
            class={`scroll-to${active === link.href ? ' active' : ''}`}
            href={link.href}
          >
            <span class="nav-icon" aria-hidden="true">
              {icons[link.icon] ?? '•'}
            </span>
            <span class="tooltip text-body-3">{link.label}</span>
          </a>
        </li>
      ))}
      <li class="right-nav-lang">
        <a href={`/${otherLang}/`} class="lang-link">
          {langLabel}
          <span class="tooltip text-body-3">{locale === 'en' ? 'Español' : 'English'}</span>
        </a>
      </li>
    </ul>
  );
}
