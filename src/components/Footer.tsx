import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

export function Footer() {
  const { shared, footer } = SITE_CONTENT;
  return (
    <footer className="site-footer">
      <div className="page-width footer-main"><div><a href={LINKS.top} className="wordmark" aria-label={shared.homeLabel}>{shared.logo}<span aria-hidden="true">.</span></a><p>{footer.tagline}</p></div>
        <nav aria-label={footer.navLabel}>{footer.links.map(item => <a key={item.link} href={LINKS[item.link]}>{item.label}</a>)}</nav>
      </div>
      <p className="page-width copyright">© {new Date().getFullYear()} {footer.copyright}</p>
    </footer>
  );
}
