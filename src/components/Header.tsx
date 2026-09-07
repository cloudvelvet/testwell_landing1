import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { header } = SITE_CONTENT;
  const headerLinks = [LINKS.respondentGroups, LINKS.questionBank, LINKS.shop] as const;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handleOutsidePointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMobileMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const handleBreakpoint = () => {
      if (desktop.matches) setMobileMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handleOutsidePointer);
    desktop.addEventListener('change', handleBreakpoint);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handleOutsidePointer);
      desktop.removeEventListener('change', handleBreakpoint);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMobileMenuOpen(false);
      }}
      className={`site-header fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-brand-light/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'py-3 shadow-sm' : 'py-4'
      }`}
    >
      <div className="max-w-page mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href={LINKS.top}
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2.5 text-brand-black font-extrabold text-xl tracking-tight group"
          aria-label="TestWell 랜딩페이지 맨 위로"
        >
          <img src="/testwell-logo.png" alt="" className="h-9 w-9" />
          <span className="testwell-wordmark">TestWell</span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="주 메뉴" className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-neutral-700">
          {header.nav.map((item, index) => (
            <a
              key={item}
              href={headerLinks[index]}
              className="py-2 hover:text-brand-black hover:underline underline-offset-8 decoration-brand-yellow decoration-2 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Right CTAs */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={LINKS.result}
            className="text-[14px] font-medium text-neutral-700 hover:text-brand-black transition-colors"
          >
            {header.resultButton}
          </a>
          <a
            href={LINKS.login}
            className="text-[14px] font-medium text-neutral-700 hover:text-brand-black transition-colors"
          >
            {header.loginButton}
          </a>
          <a
            href={LINKS.browseTests}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md header-action bg-brand-yellow text-brand-black font-bold text-[14px] hover:bg-brand-yellow-hover transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>{header.ctaButton}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="lg:hidden min-h-11 min-w-11 flex items-center justify-center rounded-lg text-brand-black hover:bg-black/5 active:bg-black/10 transition-colors"
          aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-panel lg:hidden absolute inset-x-0 top-full max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain bg-brand-light border-b border-black/10 px-6 py-6 shadow-lg">
          <nav id="mobile-navigation" className="flex flex-col text-lg font-medium text-neutral-800" aria-label="모바일 메뉴">
            {header.nav.map((item, index) => (
              <a
                key={item}
                href={headerLinks[index]}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-14 items-center justify-between border-b border-black/10 py-3 hover:text-brand-black transition-colors"
              >
                {item}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-neutral-500" />
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-1">
              <a
                href={LINKS.result}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-11 items-center text-base text-neutral-700 hover:text-brand-black"
              >
                {header.resultButton}
              </a>
              <a
                href={LINKS.login}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-11 items-center text-base text-neutral-700 hover:text-brand-black"
              >
                {header.loginButton}
              </a>
              <a
                href={LINKS.browseTests}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 mt-2 rounded-md header-action bg-brand-yellow text-brand-black font-bold text-base hover:bg-brand-yellow-hover transition-colors"
              >
                <span>{header.ctaButton}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
