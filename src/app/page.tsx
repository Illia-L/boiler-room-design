import ExperienceSection from '@/features/home/ExperienceSection/ExperienceSection';
import css from './page.module.css';
import HeroSection from '@/features/home/HeroSection/HeroSection';
import WhatIncludesSection from '@/features/home/WhatIncludesSection/WhatIncludesSection';

export default function Home() {
  return (
    <div>
      <HeroSection />

      <WhatIncludesSection />

      <section>Наші роботи (слайдер)</section>

      <ExperienceSection />
    </div>
  );
}
