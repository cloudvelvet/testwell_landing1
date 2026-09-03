import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { header } = SITE_CONTENT;
  const headerLinks = [LINKS.respondentGroups, LINKS.questionBank, LINKS.browseTests] as const;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-brand-light/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'py-3 shadow-sm' : 'py-4'
      }`}
    >
      <div className="max-w-page mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href={LINKS.top}
          className="flex items-center gap-2.5 text-brand-black font-extrabold text-xl tracking-tight group"
          aria-label="TestWell 랜딩페이지 맨 위로"
        >
          <div className="w-7 h-7 rounded-md bg-brand-black flex items-center justify-center text-brand-yellow font-black text-xs transition-transform group-hover:scale-105">
            TW
          </div>
          <span className="tracking-tighter text-2xl font-black">{header.logoText}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-neutral-700">
          {header.nav.map((item, index) => (
            <a
              key={item}
              href={headerLinks[index]}
              className="hover:text-brand-black transition-colors"
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
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-brand-yellow text-brand-black font-bold text-[14px] hover:bg-brand-yellow-hover transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>{header.ctaButton}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-brand-black hover:bg-black/5 transition-colors"
          aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-brand-light border-b border-black/10 px-6 py-8 shadow-xl transition-all">
          <nav id="mobile-navigation" className="flex flex-col gap-6 text-lg font-medium text-neutral-800" aria-label="모바일 메뉴">
            {header.nav.map((item, index) => (
              <a
                key={item}
                href={headerLinks[index]}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-black transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="h-px bg-black/10 my-2" />
            <div className="flex flex-col gap-3">
              <a
                href={LINKS.result}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-neutral-700 hover:text-brand-black"
              >
                {header.resultButton}
              </a>
              <a
                href={LINKS.login}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-neutral-700 hover:text-brand-black"
              >
                {header.loginButton}
              </a>
              <a
                href={LINKS.browseTests}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 mt-2 rounded-md bg-brand-yellow text-brand-black font-bold text-base hover:bg-brand-yellow-hover transition-colors"
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
