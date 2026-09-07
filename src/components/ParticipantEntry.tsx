import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

export const ParticipantEntry: React.FC = () => {
  const { hero } = SITE_CONTENT;

  return (
    <aside aria-labelledby="participant-title" className="border-t border-white/30 pt-6 text-white">
      <h2 id="participant-title" className="text-lg font-bold">{hero.participantTitle}</h2>
      <nav aria-label="검사 참여자 바로가기" className="mt-5 border-t border-white/15">
        <a href={LINKS.myTests} className="group flex items-center justify-between gap-4 border-b border-white/15 py-5 transition-colors hover:bg-white/5">
          <span>
            <strong className="block text-xl font-bold sm:text-2xl">{hero.myTests}</strong>
            <span className="mt-2 block text-sm text-neutral-300">{hero.myTestsDescription}</span>
          </span>
          <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
        <a href={LINKS.result} className="group flex items-center justify-between gap-4 border-b border-white/15 py-5 transition-colors hover:bg-white/5">
          <span>
            <strong className="block text-xl font-bold sm:text-2xl">{hero.result}</strong>
            <span className="mt-2 block text-sm text-neutral-300">{hero.resultDescription}</span>
          </span>
          <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
      </nav>
      <p className="mt-5 text-sm text-neutral-400">{hero.participantNote}</p>
    </aside>
  );
};
