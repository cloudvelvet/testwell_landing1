import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';
import { ParticipantEntry } from '@/components/ParticipantEntry';

export const Hero: React.FC = () => {
  const { hero } = SITE_CONTENT;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-brand-black pb-16 pt-36 text-white sm:pb-24 sm:pt-44 lg:min-h-[44rem] lg:pb-28 lg:pt-52">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-16 -z-10 h-[32rem] overflow-hidden lg:inset-0 lg:h-full">
        <img src="/testwell-question-workshop.webp" alt="" width={960} height={640} fetchPriority="high" className="absolute right-0 top-0 h-full w-full object-cover opacity-20 grayscale invert mix-blend-screen sm:object-contain sm:object-right lg:w-4/5 lg:opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-page px-6 sm:px-8 lg:px-12">
        <div className="grid items-end gap-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.6fr)] lg:gap-24">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-6 text-sm font-bold text-brand-yellow">
              {hero.categoryBadge}
            </motion.p>
            <motion.h1 id="hero-title" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="text-hero font-black tracking-tighter">
              <span className="block">{hero.mainHeadingLine1}</span>{' '}
              <span className="mt-2 block">{hero.mainHeadingLine2}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }} className="mt-7 max-w-[34rem] text-body-lead text-neutral-300 text-pretty">
              {hero.subHeading}
            </motion.p>
            <a href={LINKS.questionBank} aria-describedby="create-start-note" className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-sm bg-brand-yellow px-7 py-4 font-bold text-brand-black transition-colors hover:bg-brand-yellow-hover sm:w-auto">
              {hero.primaryCta}<ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <p id="create-start-note" className="mt-3 text-sm text-neutral-300">{hero.creationNote}</p>
          </div>
          <ParticipantEntry />
        </div>
      </div>
    </section>
  );
};
