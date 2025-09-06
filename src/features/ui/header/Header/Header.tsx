'use client';

import { FC, useState } from 'react';
import Nav from '../Nav/Nav';
import css from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={css.header}>
      <div className={`${css.container} container`}>
        <Link href='/' className={css.logo} aria-label='LICONCE home'>
          <Image
            src='/img/logo.png'
            alt='Liconce logo'
            width={160}
            height={58}
            priority
          />
        </Link>
  
        <nav className={css.navDesktop} aria-label='Головна навігація'>
          <Nav />
        </nav>
  
        <address className={css.phone}>
          <a href='tel:+380661111111'>(066) 111-11-11</a>
        </address>

        <button
          type='button'
          className={css.burger}
          aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <Image
            src='/icons/Burger.svg'
            alt='Відкрити меню'
            width={24}
            height={24}
            priority
            aria-hidden='true'
          />
        </button>
      </div>
      <div className={open ? `${css.navMobile} ${css.open}` : css.navMobile}>
        <Nav onNavigate={() => setOpen(false)} />
        <address className={css.mobilePhone}>
          <a href='tel:+380661111111' onClick={() => setOpen(false)}>(066) 111-11-11</a>
        </address>
      </div>
      {open && <button className={css.backdrop} aria-label='Закрити меню' onClick={() => setOpen(false)} />}
    </header >
  );
};

export default Header;
