import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileCheck2 } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';
import { TestFlowPanel } from '@/components/visuals/TestFlowPanel';

export const Hero: React.FC = () => {
  const { hero } = SITE_CONTENT;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-brand-black pb-24 pt-36 text-white sm:pb-28 sm:pt-44 lg:pb-32"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="relative z-10 mx-auto w-full max-w-page px-6 sm:px-8 lg:px-12">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(21rem,0.65fr)] lg:gap-16">
          <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/75"
          >
            <span className="h-2 w-2 rounded-full bg-brand-yellow" />
            <span className="text-brand-yellow">{hero.categoryBadge}</span>
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-hero font-black tracking-tighter text-balance"
          >
            <span className="block">{hero.mainHeadingLine1}</span>{' '}
            <span className="mt-1 block text-white sm:mt-2">{hero.mainHeadingLine2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-2xl text-body-lead font-normal leading-relaxed text-white/80 text-pretty"
          >
            {hero.subHeading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={LINKS.browseTests}
              className="inline-flex items-center justify-center gap-3 rounded-md bg-brand-yellow px-7 py-4 font-bold text-brand-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-yellow-hover"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={LINKS.result}
              className="inline-flex items-center justify-center gap-2.5 rounded-md border border-white/30 px-7 py-4 font-bold text-white transition-colors duration-200 hover:bg-white/10"
            >
              <FileCheck2 className="h-5 w-5" aria-hidden="true" />
              <span>{hero.secondaryCta}</span>
            </a>
          </motion.div>

          </div>
          <TestFlowPanel />
        </div>
      </div>
    </section>
  );
};
