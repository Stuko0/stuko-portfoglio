import { useEffect, useState } from 'preact/hooks';

interface NavLink {
  href: string;
  label: string;
  icon: string;
}

interface Social {
  label: string;
  href: string;
}

interface Props {
  locale?: string;
  navLinks?: NavLink[];
  socials?: Social[];
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
  { href: '#works', label: 'Selected Works', icon: 'layers' },
  { href: '#services', label: 'Services', icon: 'sparkles' },
  { href: '#about', label: 'About', icon: 'user' },
  { href: '#partners', label: 'Stack', icon: 'users' },
  { href: '#awards', label: 'Awards', icon: 'award' },
  { href: '#pricing', label: 'Engagement', icon: 'tag' },
  { href: '#faqs', label: 'FAQs', icon: 'help' },
  { href: '#contact', label: 'Contact', icon: 'mail' },
];

const defaultSocials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/Stuko0' },
  { label: 'Lydia', href: 'https://lydia-agent.stuko.dev' },
  { label: 'Email', href: 'mailto:avplaying@gmail.com' },
  { label: 'Web', href: 'https://stuko.dev' },
];

export default function SidebarMenu({ navLinks: links, socials: soc, locale = 'en' }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  const nav = links || defaultNavLinks;
  const social = soc || defaultSocials;

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

  const close = () => setOpen(false);

  return (
    <>
      {/* Hamburger — only visible on small screens */}
      <button
        type="button"
        class="sidebar-hamburger"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="2" rx="1" />
          <rect x="3" y="11" width="12" height="2" rx="1" />
          <rect x="3" y="17" width="18" height="2" rx="1" />
        </svg>
      </button>

      {/* Overlay for mobile */}
      <div
        class={`sidebar-overlay${open ? ' open' : ''}`}
        onClick={close}
        aria-hidden={!open}
      />

      <aside
        class={`tf-sidebar-menu${open ? ' open' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div class="sidebar-menu-inner">
          <div class="sidebar-heading">
            <a href="#home" class="sidebar-brand" onClick={close}>
              <span class="dot-before">Stuko</span>
              <span class="brand-sub">AI Systems</span>
            </a>
            <button type="button" class="close-canvas" aria-label="Close menu" onClick={close}>
              ✕
            </button>
          </div>

          <ul class="sidebar-nav">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  class={active === link.href ? 'active' : ''}
                  onClick={close}
                >
                  <span class="nav-icon" aria-hidden="true">
                    {icons[link.icon] ?? '•'}
                  </span>
                  <span class="text-body-2">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div class="sidebar-social">
            <div class="heading text-body-1 dot-before">Social</div>
            <ul class="social-links">
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label}>
                    {s.label.charAt(0)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language switcher */}
          <div class="sidebar-lang">
            <a href={`/${otherLang}/`} class="lang-switch">
              {langLabel} ◈
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
