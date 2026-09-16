import { SITE_CONTENT } from '@/constants/content';

export function History() {
  const { history } = SITE_CONTENT;
  return (
    <section className="history" aria-labelledby="history-title">
      <h3 id="history-title">{history.title}</h3>
      <dl className="history-list">
        {history.entries.map(item => (
          <div className="history-row" key={item.year}>
            <dt>{item.year}</dt>
            <dd>{item.description || <span className="history-blank" aria-hidden="true" />}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
