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
        <MeasurementContext />
      </div>
    </section>
  );
}
