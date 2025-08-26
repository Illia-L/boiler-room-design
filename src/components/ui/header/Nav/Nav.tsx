import React from "react";
import styles from "./Nav.module.css";

const ITEMS = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Why Us", href: "#why-us" },
  { label: "Deliverables", href: "#deliverables" },
];

const Nav: React.FC = () => (
  <nav className={styles.nav} aria-label="Primary">
    <ul className={styles.list}>
      {ITEMS.map((it) => (
        <li className={styles.item} key={it.href}>
          <a className={styles.link} href={it.href}>
            {it.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
