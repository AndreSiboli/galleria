import styles from '@/styles/Footer.module.scss';
import Container from './Container';
import Logo from './layout/Logo';
import SocialMedia from './layout/SocialMedia';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer_container}>
                    <div className={styles.footer_links}>
                        <nav className={styles.footer_wrapper}>
                            <p>Menções</p>
                            <a href="https://www.pexels.com/pt-br/" target="blank">Pexel</a>
                        </nav>
                        <nav className={styles.footer_wrapper}>
                            <p>Redes sociais</p>
                            <SocialMedia/>
                        </nav>
                    </div>
                    <div className={styles.footer_logo}>
                        <Logo/>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
