import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { LINKS } from '@/constants/links';

export const FinalCTA: React.FC = () => (
  <section aria-labelledby="start-title" className="border-b border-black/10 bg-brand-light-gray py-16 text-brand-black sm:py-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-page px-6 text-center sm:px-8 lg:px-12"
    >
      <h2 id="start-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
        참여할 검사를 찾고 있나요?
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-body-regular text-pretty text-neutral-700">
        참여할 수 있는 검사를 살펴보세요.
      </p>
      <a
        href={LINKS.browseTests}
        className="group mt-9 inline-flex min-h-16 w-full items-center justify-center gap-8 rounded-md bg-brand-yellow px-8 py-5 text-base font-bold text-brand-black transition-colors hover:bg-brand-yellow-hover active:bg-brand-yellow focus-visible:outline-brand-black sm:w-auto"
      >
        참여할 검사 찾기
        <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" />
      </a>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        <a
          href={LINKS.result}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm font-medium text-neutral-700 underline decoration-black/25 underline-offset-4 transition-colors hover:text-brand-black hover:decoration-black active:text-neutral-500 focus-visible:outline-brand-black"
        >
          내 결과 확인하기
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href={LINKS.questionBank}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm font-medium text-neutral-700 underline decoration-black/25 underline-offset-4 transition-colors hover:text-brand-black hover:decoration-black active:text-neutral-500 focus-visible:outline-brand-black"
        >
          검사 만들기 시작
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  </section>
);
