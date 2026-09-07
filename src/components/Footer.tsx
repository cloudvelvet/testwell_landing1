import React from 'react';
import { ArrowUp } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

export const Footer: React.FC = () => {
  const { footer } = SITE_CONTENT;
  const footerLinks = [LINKS.officialAbout, LINKS.terms, LINKS.privacy, LINKS.contact] as const;

  return (
    <footer className="site-footer bg-brand-light text-neutral-600 py-12 sm:py-16 border-t border-black/10">
      <div className="max-w-page mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-black/10">
          {/* Brand Column */}
          <div>
            <a href={LINKS.top} className="flex items-center gap-2.5 text-brand-black font-extrabold text-2xl tracking-tighter" aria-label="TestWell 랜딩페이지 맨 위로">
              <img src="/testwell-logo.png" alt="" className="h-8 w-8" />
              <span className="testwell-wordmark">TestWell</span>
            </a>
            <p className="text-sm text-neutral-600 mt-2.5">
              {footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="서비스 안내" className="flex flex-wrap items-center gap-x-6 gap-y-1 sm:gap-x-8 text-sm font-medium text-neutral-600">
            {footer.nav.map((item, idx) => (
              <a
                key={item}
                href={footerLinks[idx]}
                className="inline-flex min-h-11 items-center hover:text-brand-black hover:underline underline-offset-4 transition-colors"
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
          <a href={LINKS.top} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-neutral-700 hover:text-brand-black transition-colors">
            맨 위로
            <ArrowUp aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
