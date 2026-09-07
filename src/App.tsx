import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhatIsTestWell } from '@/components/WhatIsTestWell';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-yellow selection:text-brand-black flex flex-col font-sans">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-brand-yellow px-4 py-3 font-bold text-brand-black transition-transform focus:translate-y-0"
      >
        본문으로 건너뛰기
      </a>
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <WhatIsTestWell />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
