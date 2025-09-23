"use client";

import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import s from "./PageTopControls.module.css";

type Props = { title?: string };

export default function PageTopControls({ title }: Props) {
  return (
    <div className={s.wrap}>
      {/* MOBILE */}
      <div className={s.mobileTop}>
        <Link href="/shop" className={s.backLink} aria-label="Назад">
          <ArrowLeft size={18} />
          Назад
        </Link>
      </div>

      <label className={s.search} aria-label="Пошук">
        <Search size={18} />
        <input type="search" placeholder="Пошук" />
      </label>

      {/* DESKTOP */}
      <nav className={s.breadcrumbs} aria-label="breadcrumb">
        <ol className={s.bcList}>
          <li className={s.bcItem}>
            <Link href="/" className={s.bcLink}>Головна</Link>
          </li>
          <li className={s.bcItem}>
            <Link href="/shop" className={s.bcLink}>Пропозиції</Link>
          </li>
          {title && (
            <li className={`${s.bcItem} ${s.bcCurrent}`} aria-current="page">
              {title}
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
}