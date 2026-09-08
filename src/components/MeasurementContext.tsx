import { SITE_CONTENT } from '@/constants/content';

export function MeasurementContext() {
  const { measurement } = SITE_CONTENT;
  return (
    <aside className="measurement" aria-labelledby="measurement-title">
      <div className="measurement-grid">
        <div><p className="eyebrow">{measurement.label}</p><h3 id="measurement-title">{measurement.title}</h3></div>
        <p className="section-description">{measurement.description}</p>
      </div>
    </aside>
  );
}
