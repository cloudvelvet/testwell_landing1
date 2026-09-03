import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileCheck2, PencilLine } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

export const FinalCTA: React.FC = () => {
  const { finalCta } = SITE_CONTENT;

  return (
    <section className="relative bg-brand-light-gray text-brand-black py-20 sm:py-24 overflow-hidden border-b border-black/10">
      <div className="absolute inset-0 bg-grid-pattern-light opacity-20 pointer-events-none" />

      <div className="max-w-page mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-brand-black w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            <span>{finalCta.tag}</span>
          </motion.div>

          {/* Massive Editorial Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl font-black text-brand-black tracking-tight leading-tight break-keep"
          >
            <span className="block sm:whitespace-nowrap">{finalCta.headlineLine1}</span>{' '}
            <span className="block sm:whitespace-nowrap mt-1 sm:mt-2">{finalCta.headlineLine2}</span>
          </motion.h2>

          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-regular text-neutral-700 mt-6 max-w-2xl font-medium leading-relaxed break-keep"
          >
            {finalCta.subText}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a
              href={LINKS.browseTests}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-brand-yellow text-brand-black font-bold text-base hover:bg-brand-yellow-hover transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>{finalCta.primaryBtn}</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href={LINKS.result}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md bg-white hover:bg-black/5 text-brand-black font-bold text-base border border-brand-black/30 transition-all duration-200"
            >
              <FileCheck2 className="w-5 h-5" aria-hidden="true" />
              <span>{finalCta.secondaryBtn}</span>
            </a>
            <a
              href={LINKS.questionBank}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md border border-brand-black/25 bg-transparent text-brand-black font-bold text-base transition-all duration-200 hover:bg-white/60"
            >
              <PencilLine className="w-5 h-5" aria-hidden="true" />
              <span>{finalCta.tertiaryBtn}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
