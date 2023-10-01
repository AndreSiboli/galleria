import styles from '@/styles/bars/Menu.module.scss';

import Link from 'next/link';
import Dropdown from '@/components/dropdown/Index';

export default function Menu(props: any) {
    const { hidden } = props;
    function closeMenu() {}

    return (
        <nav className={`${styles.menu} ${hidden && styles.active}`}>
            <div className={styles.menu_container}>
                <div className={styles.menu_wrapper}>
                    <div className={styles.menu_links}>
                        <Dropdown />
                        <Link href="/#about" scroll={false} onClick={closeMenu}>
                            Sobre
                        </Link>
                        <Link href="/#contact" scroll={false} onClick={closeMenu}>
                            Contato
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
