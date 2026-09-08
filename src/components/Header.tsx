import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

export function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { header, shared } = SITE_CONTENT;

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); triggerRef.current?.focus(); }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
      <div className="page-width header-inner">
        <a href={LINKS.top} className="wordmark" aria-label={shared.homeLabel} onClick={() => setOpen(false)}>{shared.logo}<span aria-hidden="true">.</span></a>
        <nav className="desktop-nav" aria-label={header.navLabel}>
          {header.nav.map(item => <a href={LINKS[item.link]} key={item.link}>{item.label}</a>)}
          <a href={LINKS.login} className="login-link">{header.login}</a>
        </nav>
        <button type="button" className="menu-trigger" ref={triggerRef} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? header.menuClose : header.menuOpen} onClick={() => setOpen(value => !value)}>
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" hidden={!open} className="mobile-nav" aria-label={header.mobileLabel}>
        {header.nav.map(item => <a href={LINKS[item.link]} key={item.link} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a href={LINKS.login} onClick={() => setOpen(false)}>{header.login}</a>
      </nav>
    </header>
  );
}
