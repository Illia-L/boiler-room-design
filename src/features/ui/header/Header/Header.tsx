import Nav from '../Nav/Nav';
import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <p>Logo</p>

      <Nav />

      <p>(066) 111-11-11</p>
    </header>
  );
}

export default Header;
