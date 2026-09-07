import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

const FEATURE_LINKS = [LINKS.questionBank, LINKS.testPapers, LINKS.respondentGroups] as const;

export const WhatIsTestWell: React.FC = () => {
  const { whatIsTestWell } = SITE_CONTENT;

  return (
    <section id="about" className="scroll-mt-24 border-b border-white/10 bg-brand-black-subtle pb-16 pt-20 text-white sm:pt-28 lg:pt-36">
      <div className="mx-auto max-w-page px-6 sm:px-8 lg:px-12">
        <p className="text-sm font-bold text-neutral-400">{whatIsTestWell.sectionTag}</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <h2 className="max-w-[13ch] text-section-title font-black tracking-tight text-balance">{whatIsTestWell.mainHeadline}</h2>
            <p className="mt-6 max-w-lg text-body-regular text-neutral-300">{whatIsTestWell.description}</p>
          </div>
          <div className="border-t border-white/30">
            {whatIsTestWell.features.map((feature, index) => (
              <article key={feature.title} className="border-b border-white/15 py-6 sm:py-8">
                <h3 className="text-2xl font-bold tracking-tight">{feature.title}</h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-300">{feature.description}</p>
                <a href={FEATURE_LINKS[index]} className="mt-3 inline-flex min-h-11 items-center gap-2 font-bold underline decoration-brand-yellow decoration-2 underline-offset-4 transition-colors hover:text-brand-yellow">
                  {feature.action}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
        <aside aria-labelledby="result-context-title" className="mt-12 grid gap-6 border-t border-white/15 pt-8 sm:mt-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <p className="text-sm font-bold text-neutral-400">{whatIsTestWell.resultContext.label}</p>
            <h3 id="result-context-title" className="mt-3 text-2xl font-bold tracking-tight">{whatIsTestWell.resultContext.title}</h3>
          </div>
          <div>
            <p className="text-body-regular text-white">{whatIsTestWell.resultContext.explanation}</p>
            <p className="mt-3 text-body-regular text-neutral-300">{whatIsTestWell.resultContext.interpretation}</p>
          </div>
        </aside>
      </div>
    </section>
  );
};
