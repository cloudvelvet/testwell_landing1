import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { LINKS } from '@/constants/links';
import { SITE_CONTENT } from '@/constants/content';

export const FinalCTA: React.FC = () => {
  const { finalCta } = SITE_CONTENT;

  return (
    <section className="bg-brand-black-subtle py-16 text-white sm:py-24">
      <div className="mx-auto grid max-w-page gap-7 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-12">
        <div>
          <p className="text-sm font-semibold text-neutral-400">{finalCta.tag}</p>
          <h2 className="mt-3 max-w-xl text-2xl font-bold tracking-tight sm:text-3xl">{finalCta.headline}</h2>
          <p className="mt-3 max-w-xl text-body-regular text-neutral-300">{finalCta.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
          <a href={LINKS.questionBank} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-sm bg-brand-yellow px-6 py-4 font-bold text-brand-black transition-colors hover:bg-brand-yellow-hover">
            {finalCta.primaryBtn}<ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <a href={LINKS.contact} className="inline-flex min-h-11 items-center gap-2 font-bold underline underline-offset-4">
            {finalCta.secondaryBtn}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
