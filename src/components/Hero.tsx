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
        <div className="hero-entries">
          <div className="creator-entry">
            <a href={LINKS.questionBank} className="primary-link" aria-describedby="create-note">
              {hero.primary}<ArrowRight size={20} aria-hidden="true" />
            </a>
            <p id="create-note" className="entry-note">{hero.note}</p>
          </div>
          <ParticipantEntry />
        </div>
      </div>
    </section>
  );
}
