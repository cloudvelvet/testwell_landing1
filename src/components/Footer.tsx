import React from 'react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

export const Footer: React.FC = () => {
  const { footer } = SITE_CONTENT;
  const footerLinks = [LINKS.officialAbout, LINKS.terms, LINKS.privacy, LINKS.contact] as const;

  return (
    <footer className="bg-brand-light text-neutral-600 py-12 sm:py-16 border-t border-black/10">
      <div className="max-w-page mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-black/10">
          {/* Brand Column */}
          <div>
            <a href={LINKS.top} className="flex items-center gap-2.5 text-brand-black font-extrabold text-2xl tracking-tighter" aria-label="TestWell 랜딩페이지 맨 위로">
              <div className="w-6 h-6 rounded-md bg-brand-black flex items-center justify-center text-brand-yellow font-black text-xs">
                TW
              </div>
              <span>{footer.logoText}</span>
            </a>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2.5">
              {footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-medium text-neutral-600">
            {footer.nav.map((item, idx) => (
              <a
                key={item}
                href={footerLinks[idx]}
                className="hover:text-brand-black transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Subfooter */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {footer.logoText}. All rights reserved.
          </div>
          <div className="text-neutral-500">
            {footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};
