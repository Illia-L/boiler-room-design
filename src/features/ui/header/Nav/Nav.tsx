'use client'
import Link from 'next/link';
import css from './Nav.module.css';
import { navLinks } from '../config';
import { FC } from 'react';
import { usePathname } from 'next/navigation';

type NavProps = {
  onNavigate?: () => void;
}

const Nav: FC<NavProps> = ({ onNavigate }) => {
  const pathname = usePathname();
  return (
    <nav className={css.nav} aria-label='Головна навігація'>
      <ul className={css.list}>
        {navLinks.map(link => {
          const isHashLink =
            link.to.startsWith('#') || link.to.includes('#');

          const isActive =
            !isHashLink &&
            (link.to === '/'
              ? pathname === '/'
              : pathname === link.to || pathname.startsWith(link.to + '/'));

          return (
            <li key={link.to}>
              <Link
                href={link.to}
                className={isActive ? `${css.link} ${css.active}` : css.link}
                onClick={onNavigate}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
