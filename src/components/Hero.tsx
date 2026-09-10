import { ArrowRight } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';
import { ParticipantEntry } from '@/components/ParticipantEntry';

export function Hero() {
  const { hero } = SITE_CONTENT;
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="page-width">
        <p className="eyebrow hero-label">{hero.label}</p>
        <h1 id="hero-title">{hero.title.map(line => <span key={line}>{line}</span>)}</h1>
        <p className="hero-description">{hero.description}</p>
        <div className="hero-entries hero-action-grid">
          <div className="creator-entry">
            <a href={LINKS.questionBank} className="primary-link" aria-describedby="create-note">
              {hero.primary}<ArrowRight size={20} aria-hidden="true" />
            </a>
            <p id="create-note" className="entry-note">{hero.note}</p>
          </div>
          <ParticipantEntry />
          <div>
            <a href={LINKS.myTests} className="secondary-entry-link" aria-describedby="browse-note">
              {hero.browse}<ArrowRight size={20} aria-hidden="true" />
            </a>
            <p id="browse-note" className="entry-note">{hero.browseNote}</p>
          </div>
          <div>
            <a href={LINKS.result} className="secondary-entry-link" aria-describedby="result-note">
              결과 확인<ArrowRight size={20} aria-hidden="true" />
            </a>
            <p id="result-note" className="entry-note">참여한 검사의 결과를 확인하세요.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
