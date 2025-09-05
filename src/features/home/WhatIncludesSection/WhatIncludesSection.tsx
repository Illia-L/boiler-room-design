import { AppLink } from '@/features/ui/AppLink/AppLink';
import cssSection from '../css/TextSection.module.css';
import css from './WhatIncludesSection.module.css';
import clsx from 'clsx';

const whatIncludesItems = [
  '3D візуалізація котельні',
  'Специфікація обладнання та матеріалів',
  'Розрахунок тепловтрат та річне споживання енергії',
  'Комунікації, що мають бути закладені на різних етапах будівництва',
  'Покрокова інструкція з монтажу котельні з 3D ілюстраціями',
  'Схема електрики та автоматики',
  'Інструкція з експлуатації',
  'Графік з обслуговування',
];

function WhatIncludesSection() {
  return (
    <section className={clsx('container', cssSection.section)}>
      <h2 className={cssSection.title}>Що входить до проєкту</h2>

      <div className={cssSection.content}>
        <ul className={css.list}>
          {whatIncludesItems.map((item, i) => (
            <li
              className={css.item}
              key={i}
            >
              <div className={css.iconBox}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className={css.icon}
                >
                  <path d='M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344' />
                  <path d='m9 11 3 3L22 4' />
                </svg>
              </div>

              <span>{item}</span>
            </li>
          ))}
        </ul>
        <AppLink
          href='/deliverables'
          variant='outline'
          size='xl'
          className={cssSection.link}
        >
          Дивитись шаблон проєкту
        </AppLink>
      </div>
    </section>
  );
}

export default WhatIncludesSection;
