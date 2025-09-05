import { AppLink } from '@/features/ui/AppLink/AppLink';
import css from '../css/TextSection.module.css';
import clsx from 'clsx';

export default function ExperienceSection() {
  return (
    <section className={clsx('container', css.section)}>
      <h2 className={css.title}>20 років досвіду</h2>

      <div className={css.content}>
        <p className={css.desc}>
          Мене звати Ілля. Я монтую системи опалення більше 20 років. Через нашу
          бригаду пройшло більше 200 приватних будинків. Ці проєкти я розробляв
          для нашої команди, для внутрішнього використання.
        </p>

        <p className={css.desc}>
          Застосування проєктів на практиці приємно вразили. Радий запропонувати
          їх як окрему послугу. Сподіваюсь, ви знайдете їх корисними.
        </p>
        <AppLink
          href='/shop'
          variant='outline'
          size='xl'
          className={css.link}
        >
          Дивитись каталог
        </AppLink>
      </div>
    </section>
  );
}
