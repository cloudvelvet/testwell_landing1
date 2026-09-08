import { MotionConfig } from 'framer-motion';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhatIsTestWell } from '@/components/WhatIsTestWell';
import { MeasurementContext } from '@/components/MeasurementContext';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { SITE_CONTENT } from '@/constants/content';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main-content" className="skip-link">{SITE_CONTENT.shared.skip}</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <WhatIsTestWell />
        <MeasurementContext />
        <FinalCTA />
      </main>
      <Footer />
    </MotionConfig>
  );
}
