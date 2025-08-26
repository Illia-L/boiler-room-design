import React, { useState } from 'react';
import css from './Header.module.css';
import Nav from '../Nav/Nav';
import MobileMenuModal from '../MobileMenuModal/MobileMenuModal';
import OpenMenuButton from '../OpenMenuButton/OpenMenuButton';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={css.header}>
        <div className='container'>
          <div className={css.row}>
            <div className={css.logo}>
              <a
                href='/'
                className={css.logoLink}
                aria-label='Home'
              >
                Liconce
              </a>
            </div>

            <nav
              className={css.navArea}
              aria-label='Primary'
            >
              <Nav />
            </nav>

            <address className={css.contactsArea}>
              <a href="tel:+380668057980">(066) 805-79-80</a>
            </address>

            <div className={css.menuArea}>
              <OpenMenuButton onOpen={() => setIsOpen(true)} />
            </div>
          </div>
        </div>
      </header>

      <MobileMenuModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Header;
