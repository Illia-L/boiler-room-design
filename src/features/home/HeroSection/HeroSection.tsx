import css from './HeroSection.module.css';
import { AppLink } from '@/features/ui/AppLink/AppLink';
import clsx from 'clsx';
import React from 'react';

export default function HeroSection() {
  return (
    <section className={css.section}>
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
    </section>
  );
}
