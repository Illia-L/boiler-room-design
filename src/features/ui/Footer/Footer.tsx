'use client';

import { FC } from "react";
import css from './Footer.module.css';
import Link from "next/link";
import Image from "next/image";

const Footer: FC = () => {
    return (
        <footer id="contacts" className={css.footer} aria-labelledby="site-footer-heading">
            <h2 id="site-footer-heading" className="visually-hidden">Футер сайту</h2>
            <div className={`${css.container} container`}>
                <Link href='/' className={css.logo} aria-label="LICONCE - на головну">
                    <Image
                        src='/img/logo.png'
                        alt='Liconce logo'
                        width={160}
                        height={58}
                        priority
                    />
                </Link>
                <ul className={css.contacts} aria-label="Контакти">
                    <li><address className={css.phone}>
                        <a href='tel:+380661111111'>
                            <Image
                                src='/icons/phone.svg'
                                alt=""
                                width={12}
                                height={12}
                                aria-hidden='true'
                            />
                            (066) 111-11-11</a>
                    </address></li>
                    <li><address className={css.phone}>
                        <a href='tel:+380661111112'>
                            <Image
                                src='/icons/phone.svg'
                                alt=""
                                width={12}
                                height={12}
                                aria-hidden='true'
                            />
                            (066) 111-11-12</a>
                    </address></li>
                </ul>
                <div className={css.emailAndSocials}>
                    <address className={css.email}>
                        <a href='mailto:illia@mail.com'>
                            <Image
                                src='/icons/email.svg'
                                alt=""
                                width={12}
                                height={12}
                                aria-hidden='true'
                            />
                            illia@mail.com</a>
                    </address>
                    <nav className={css.socials} aria-label="Месенджери">
                        <Link
                            href='https://wa.me/380661111111'
                            aria-label="Написати у WhatsApp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src='/icons/whatsapp.svg'
                                alt=""
                                width={24}
                                height={24}
                                aria-hidden='true'
                            />
                        </Link>
                        <Link
                            href='viber://chat?number=%2B380661111111'
                            aria-label="Написати у Viber"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src='/icons/viber.svg'
                                alt=""
                                width={24}
                                height={24}
                                aria-hidden='true'
                            />
                        </Link>
                    </nav>
                </div>
            </div>
            <div className={css.bottom}>
                <p>&copy; {new Date().getFullYear()} LICONE. Всі права захищені.</p>
            </div>
        </footer>
    );
};

export default Footer;