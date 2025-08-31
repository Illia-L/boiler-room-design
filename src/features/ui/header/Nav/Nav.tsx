import Link from 'next/link';
import css from './Nav.module.css';
import { navLinks } from '../config';

function Nav() {
  return (
    <nav>
      <ul>
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link href={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
