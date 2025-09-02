import css from './HeroSection.module.css';
import { AppLink } from '@/features/ui/AppLink/AppLink';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  return (
    <section className={css.section}>
      <div className={css.imageContainer}>
        <Image
          src='/img/hero.png'
          fill
          priority
          sizes='(min-width: 1440px) 1440px, 100vw'
          alt=''
          className={css.image}
        />

        <div className={clsx('container', css.row)}>
          <div className={css.content}>
            <h1 className={css.title}>Розробляємо проєкти котелень</h1>

            <p className={css.desc}>Зібрати котельню, як дитячий конструктор</p>

            <AppLink
              href='/shop'
              variant='outline'
              contrast
              className={css.link}
            >
              Дивитись каталог
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
