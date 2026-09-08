import { ArrowUpRight } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';
import { ProductFlow } from '@/components/ProductFlow';
import { MeasurementContext } from '@/components/MeasurementContext';

export function WhatIsTestWell() {
  const { capabilities } = SITE_CONTENT;
  return (
    <section id="about" className="capabilities light-surface" aria-labelledby="capabilities-title">
      <div className="page-width">
        <div className="section-intro">
          <div><p className="eyebrow">{capabilities.label}</p><h2 id="capabilities-title">{capabilities.title}</h2></div>
          <p className="section-description">{capabilities.description}</p>
        </div>
        <ProductFlow />
        <div className="capability-grid">
          {capabilities.items.map(item => (
            <article key={item.link}>
              <h3>{item.title}</h3><p>{item.description}</p>
              <a href={LINKS[item.link]} className="text-link">{item.action}<ArrowUpRight size={18} aria-hidden="true" /></a>
            </article>
          ))}
        </div>
        <p className="section-note">{SITE_CONTENT.shared.externalNote}</p>
        <MeasurementContext />
      </div>
    </section>
  );
}
