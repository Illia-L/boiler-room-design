import css from './page.module.css';
import HeroSection from '@/features/home/HeroSection/HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection />

      <section>Що входить до проєкту</section>

      <section>Наші роботи (слайдер)</section>

      <section>20 років досвіду</section>
    </div>
  );
}
