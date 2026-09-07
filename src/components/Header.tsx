import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

const NAV_LINKS = [LINKS.about, LINKS.myTests] as const;

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { header } = SITE_CONTENT;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-black/95 text-white backdrop-blur-md transition-[padding,box-shadow] duration-200 ${isScrolled ? 'py-3 shadow-sm' : 'py-4'}`}>
      <div className="mx-auto flex max-w-page items-center justify-between px-6 sm:px-8 lg:px-12">
        <a href={LINKS.top} className="group flex items-center gap-2.5" aria-label="TestWell 맨 위로">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-brand-black text-xs font-black text-brand-yellow transition-transform group-hover:-rotate-3">TW</span>
          <span className="text-xl font-black tracking-tighter text-white sm:text-2xl">{header.logoText}</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-neutral-300 lg:flex" aria-label="주요 메뉴">
          {header.nav.map((item, index) => (
            <a key={item} href={NAV_LINKS[index]} className="transition-colors hover:text-white">{item}</a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 text-sm font-semibold lg:flex">
          <a href={LINKS.result} className="text-neutral-300 transition-colors hover:text-white">{header.resultButton}</a>
          <a href={LINKS.login} className="text-neutral-300 transition-colors hover:text-white">{header.loginButton}</a>
          <a href={LINKS.questionBank} className="inline-flex items-center gap-1.5 rounded-sm bg-brand-yellow px-4 py-2.5 font-bold text-brand-black transition-colors hover:bg-brand-yellow-hover">
            {header.ctaButton}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-sm p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <nav id="mobile-navigation" className="absolute inset-x-0 top-full grid gap-5 border-b border-white/15 bg-brand-black px-6 py-7 text-base font-semibold shadow-xl lg:hidden" aria-label="모바일 메뉴">
          {header.nav.map((item, index) => (
            <a key={item} href={NAV_LINKS[index]} onClick={() => setMobileMenuOpen(false)}>{item}</a>
          ))}
          <a href={LINKS.result} onClick={() => setMobileMenuOpen(false)}>{header.resultButton}</a>
          <a href={LINKS.login} onClick={() => setMobileMenuOpen(false)}>{header.loginButton}</a>
          <a href={LINKS.questionBank} onClick={() => setMobileMenuOpen(false)} className="mt-1 flex items-center justify-center gap-2 rounded-sm bg-brand-yellow px-5 py-3.5 font-bold text-brand-black">
            {header.ctaButton}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      ) : null}
    </header>
  );
};
