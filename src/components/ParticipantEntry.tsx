import { ArrowUpRight } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

export function ParticipantEntry() {
  const { participant } = SITE_CONTENT;
  return (
    <aside className="participant-entry" aria-labelledby="participant-title">
      <div><h2 id="participant-title">{participant.title}</h2><p>{participant.description}</p></div>
      <a href={LINKS.myTests} className="text-link" aria-describedby="participate-note">{participant.action}<ArrowUpRight size={20} aria-hidden="true" /></a>
      <p id="participate-note" className="entry-note">{participant.note}</p>
    </aside>
  );
}
