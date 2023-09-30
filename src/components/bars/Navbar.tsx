import { useEffect, useState } from 'react';
import styles from '@/styles/bars/Navbar.module.scss';

import Link from 'next/link';
import Container from '@/components/layout/Container';
import Dropdown from '@/components/dropdown/Index';
import SocialMedia from '@/components/layout/SocialMedia';
import Logo from '@/components/layout/Logo';

export default function Navbar() {
    const [active, setActive] = useState(false);
    const isHeader = active ? `${styles.header} ${styles.active}` : styles.header;
    const isMenu = active ? `${styles.menu} ${styles.active}` : styles.menu;

    useEffect(() => {
        if (active) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }, [active]);

    useEffect(() => {
        function minimize() {
            if (window.innerWidth >= 768 && active) {
                closeMenu();
            }
        }

        window.addEventListener('resize', minimize);

        return () => {
            window.removeEventListener('resize', minimize);
        };
    }, [active]);

    function closeMenu() {
        setActive(false);
    }

    return (
        <header className={isHeader}>
            <Container>
                <div className={styles.header_container}>
                    <div className={styles.header_wrapper}>
                        <Logo />
                        <nav className={styles.header_nav}>
                            <div className={styles.header_nav_wrapper}>
                                <Dropdown />
                                <Link href="/#about" scroll={false} onClick={closeMenu}>
                                    Sobre
                                </Link>
                                <Link href="/#contact" scroll={false} onClick={closeMenu}>
                                    Contato
                                </Link>
                            </div>
                        </nav>
                        <div className={isMenu} onClick={() => setActive(!active)}>
                            <span className={styles.trace}></span>
                            <span className={styles.trace}></span>
                            <span className={styles.trace}></span>
                        </div>
                    </div>
                    <SocialMedia hidden={true} />
                </div>
            </Container>
        </header>
    );
}
