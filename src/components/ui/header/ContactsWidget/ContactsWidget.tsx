import React, { useEffect, useRef, useState } from 'react';
import styles from './ContactsWidget.module.css';

const CONTACTS = [
  { label: 'Call', value: '(066) 805-79-80', href: 'tel:+380668057980' },
  {
    label: 'Email',
    value: '2275040@gmail.com',
    href: 'mailto:2275040@gmail.com',
  },
  { label: 'Telegram', value: '@yourhandle', href: 'https://t.me/yourhandle' },
];

const ContactsWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  // Close on outside click / Escape
  useEffect(() => {
    const onDocDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener('mousedown', onDocDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // Focus first item when opening
  useEffect(() => {
    if (open) itemRefs.current[0]?.focus();
  }, [open]);

  const onToggle = () => setOpen(v => !v);

  const onMenuKeyDown: React.KeyboardEventHandler<HTMLUListElement> = e => {
    const idx = itemRefs.current.findIndex(el => el === document.activeElement);
    const last = CONTACTS.length - 1;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = idx < 0 ? 0 : idx === last ? 0 : idx + 1;
      itemRefs.current[next]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = idx < 0 ? last : idx === 0 ? last : idx - 1;
      itemRefs.current[prev]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      itemRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      itemRefs.current[last]?.focus();
    }
  };

  return (
    <div
      className={styles.contacts}
      ref={rootRef}
    >
      <button
        ref={btnRef}
        type='button'
        className={styles.toggle}
        aria-haspopup='menu'
        aria-expanded={open}
        onClick={onToggle}
      >
        Contacts
        <span
          className={styles.caret}
          aria-hidden='true'
        />
      </button>

      <ul
        role='menu'
        className={`${styles.menu} ${open ? styles.open : ''}`}
        onKeyDown={onMenuKeyDown}
      >
        {CONTACTS.map((c, i) => (
          <li
            role='none'
            key={c.label}
          >
            <a
              role='menuitem'
              ref={el => (itemRefs.current[i] = el)}
              className={styles.link}
              href={c.href}
              onClick={() => setOpen(false)}
            >
              <span className={styles.label}>{c.label}</span>
              <span className={styles.value}>{c.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsWidget;
