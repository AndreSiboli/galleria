import styles from '@/styles/pages/404.module.scss';

import Link from 'next/link';
import Container from '@/components/layout/Container';

export default function Page404() {
    return (
        <main className={styles.error}>
            <Container>
                <div className={styles.error_container}>
                    <div className={styles.error_code}>
                        <span>404.</span>
                    </div>
                    <div className={styles.error_message}>
                        <p>Ei, você não pode continuar por este caminho &gt;:{'('}</p>
                        <Link href="/">Voltar</Link>
                    </div>
                </div>
            </Container>
        </main>
    );
}
