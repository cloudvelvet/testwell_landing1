import { ArrowUpRight } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

export function FinalCTA() {
  const { finalCta } = SITE_CONTENT;
  return (
    <section className="next-section" aria-labelledby="next-title">
      <div className="page-width">
        <p className="eyebrow">{finalCta.label}</p><h2 id="next-title">{finalCta.title}</h2>
        <div className="next-links">{finalCta.links.map(item => <a href={LINKS[item.link]} key={item.link}><span><span className="next-label">{item.title}</span><strong>{item.action}</strong></span><ArrowUpRight size={24} aria-hidden="true" /></a>)}</div>
      </div>
    </section>
  );
}
