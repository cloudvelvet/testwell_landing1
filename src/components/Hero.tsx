import { useState } from 'react';
import { ArrowRight, Ticket, ClipboardCheck, FilePenLine } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';
import { ParticipantEntry } from '@/components/ParticipantEntry';

export function Hero() {
  const { hero } = SITE_CONTENT;
  const [ticketOpen, setTicketOpen] = useState(false);
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="page-width">
        <div className="hero-intro">
          <div className="hero-copy">
            <p className="eyebrow hero-label">{hero.label}</p>
            <h1 id="hero-title">{hero.title.map(line => <span key={line}>{line}</span>)}</h1>
            <p className="hero-description">{hero.description}</p>
          </div>
          <div className="ticket-panel"><div className="ticket-card-heading"><span className="ticket-kicker">검사 참여 · 결과 확인</span><Ticket size={24} strokeWidth={1.5} aria-hidden="true" /></div><ParticipantEntry open={ticketOpen} onOpenChange={setTicketOpen} /><div className="ticket-card-stub" aria-hidden="true"><span>TestWell</span><span className="ticket-bars" /></div></div>
        </div>
        <div className="hero-entries hero-action-grid">
          <div className="browse-entry"><ClipboardCheck className="entry-icon" size={26} aria-hidden="true" />
            <a href={LINKS.browseTests} className="primary-link" aria-describedby="browse-note">{hero.browse}<ArrowRight size={20} aria-hidden="true" /></a>
            <p id="browse-note" className="entry-note">{hero.browseNote}</p>
          </div>
          <div className="creator-entry"><FilePenLine className="entry-icon" size={26} aria-hidden="true" />
            <a href={LINKS.questionBank} className="primary-link" aria-describedby="create-note">{hero.primary}<ArrowRight size={20} aria-hidden="true" /></a>
            <p id="create-note" className="entry-note">{hero.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
