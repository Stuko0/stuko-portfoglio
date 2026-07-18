import { useEffect, useState } from 'preact/hooks';
import { navLinks, socials } from '../../data/content';

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

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const sections = navLinks
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
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        class="tf-btn-menu"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="2" rx="1" />
          <rect x="3" y="11" width="12" height="2" rx="1" />
          <rect x="3" y="17" width="18" height="2" rx="1" />
        </svg>
      </button>

      <div
        class={`sidebar-overlay${open ? ' open' : ''}`}
        onClick={close}
        aria-hidden={!open}
      />

      <aside class={`tf-sidebar-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <div class="sidebar-menu-inner">
          <div class="sidebar-heading">
            <div class="text-body-1 dot-before">Menu</div>
            <button type="button" class="close-canvas" aria-label="Close menu" onClick={close}>
              ✕
            </button>
          </div>

          <ul class="sidebar-nav">
            {navLinks.map((link) => (
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
            <div class="heading text-body-1 dot-before">Social Network</div>
            <ul class="social-links">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label}>
                    {s.label.charAt(0)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
