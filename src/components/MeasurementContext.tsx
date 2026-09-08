import { SITE_CONTENT } from '@/constants/content';

export function MeasurementContext() {
  const { measurement } = SITE_CONTENT;
  return (
    <section className="measurement light-surface" aria-labelledby="measurement-title">
      <div className="page-width measurement-grid">
        <div><p className="eyebrow">{measurement.label}</p><h2 id="measurement-title">{measurement.title}</h2><p className="section-description">{measurement.description}</p></div>
        <div><dl>{measurement.items.map(item => <div key={item.title}><dt>{item.title}</dt><dd>{item.description}</dd></div>)}</dl><p className="section-note">{measurement.note}</p></div>
      </div>
    </section>
  );
}
