import styles from '@/styles/bars/Footer.module.scss';

import Link from 'next/link';
import Container from '@/components/layout/Container';
import Logo from '@/components/layout/Logo';
import SocialMedia from '@/components/layout/SocialMedia';

export default function Footer() {
    const date = new Date().getFullYear() || 2023;

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer_container}>
                    <div className={styles.footer_wrapper}>
                        <div className={styles.footer_links}>
                            <nav className={styles.footer_nav}>
                                <h3>Menções</h3>
                                <Link href="https://www.pexels.com/pt-br/" target="_blank">
                                    Pexel
                                </Link>
                            </nav>
                            <nav className={styles.footer_nav}>
                                <h3>Redes sociais</h3>
                                <SocialMedia />
                            </nav>
                        </div>
                        <div className={styles.footer_logo}>
                            <Logo />
                        </div>
                    </div>
                    <div className={styles.footer_rights}>
                        <p>Copyright &copy; {date} Todos direitos reservados.</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
