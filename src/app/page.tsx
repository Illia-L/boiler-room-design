import ExperienceSection from '@/features/home/ExperienceSection/ExperienceSection';
import css from './page.module.css';
import HeroSection from '@/features/home/HeroSection/HeroSection';
import WhatIncludesSection from '@/features/home/WhatIncludesSection/WhatIncludesSection';
import OurWorkSlider from '@/features/home/OurWorkSlider/OurWorkSlider';

export default function Home() {
  return (
    <div>
      <HeroSection />

      <WhatIncludesSection />

      <OurWorkSlider />

      <ExperienceSection />
    </div>
  );
}
