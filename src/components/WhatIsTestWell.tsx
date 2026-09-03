import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

export const WhatIsTestWell: React.FC = () => {
  const { whatIsTestWell } = SITE_CONTENT;
  const audienceLinks = [LINKS.browseTests, LINKS.result, LINKS.questionBank] as const;

  return (
    <section id="about" className="relative bg-brand-light text-brand-black py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-black/10">
      {/* Subtle light grid */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-30 pointer-events-none" />

      <div className="max-w-page mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl">
          {/* Section Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-xs sm:text-sm font-mono text-neutral-600 uppercase tracking-widest mb-8"
          >
            <span className="w-8 h-px bg-neutral-400" />
            <span>{whatIsTestWell.sectionTag}</span>
          </motion.div>

          {/* Editorial Big Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-section-title font-black text-brand-black tracking-tight leading-tight break-keep"
          >
            {whatIsTestWell.mainHeadlineLine1}
            <br />{' '}
            {whatIsTestWell.mainHeadlineLine2}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-neutral-700 break-keep sm:text-xl"
          >
            {whatIsTestWell.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 border-t-2 border-brand-black sm:mt-16"
          >
            {whatIsTestWell.paths.map((item, idx) => (
              <article
                key={item.tag}
                className="group grid gap-4 border-b border-black/10 py-7 sm:grid-cols-[5.5rem_minmax(0,1fr)_minmax(14rem,0.9fr)_auto] sm:items-center sm:gap-6 sm:py-8"
              >
                <span className="text-xs font-mono font-bold text-neutral-600 uppercase tracking-wider">
                  {item.tag}
                </span>
                <h3 className="text-xl font-black tracking-tight text-brand-black break-keep sm:text-2xl">
                  {item.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-neutral-700 text-pretty sm:text-base">
                  {item.desc}
                </p>
                <a
                  href={audienceLinks[idx]}
                  className="inline-flex w-fit items-center gap-1.5 font-bold text-brand-black underline decoration-brand-yellow decoration-2 underline-offset-4 transition-transform duration-200 hover:translate-x-1 hover:text-brand-black"
                >
                  {item.actionLabel}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
