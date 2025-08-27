import type { ReactNode } from 'react';
import css from './Layout.module.css';
import Header from '../header/Header/Header';

interface LayoutProps {
  children?: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={css.app}>
      <Header />
      <main className={css.main}>
        {/* <div className='container'> */}
          {children}
        {/* </div> */}
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
