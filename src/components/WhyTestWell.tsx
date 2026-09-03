import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONTENT } from '@/constants/content';

export const WhyTestWell: React.FC = () => {
  const { whyTestWell } = SITE_CONTENT;

  return (
    <section id="why" className="relative overflow-hidden border-b border-white/10 bg-brand-black py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="relative z-10 mx-auto max-w-page px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid max-w-6xl gap-8 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-10"
        >
          <p className="text-xs font-mono font-semibold tracking-wider text-brand-yellow">02 / {whyTestWell.sectionTag}</p>
          <div className="border-t-2 border-brand-yellow pt-5">
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              {whyTestWell.headlineLine1}{' '}
              {whyTestWell.headlineLine2}
            </h2>
            <p className="mt-5 max-w-2xl text-body-regular leading-relaxed text-neutral-300 text-pretty">
              {whyTestWell.introduction}
            </p>
            <p className="mt-4 max-w-2xl border-l-2 border-brand-yellow pl-4 text-sm leading-relaxed text-neutral-400 text-pretty">
              {whyTestWell.note}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
