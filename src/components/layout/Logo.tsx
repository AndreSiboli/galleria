import Link from 'next/link';
import styles from '@/styles/layout/Logo.module.scss';

export default function Logo() {
    return (
        <Link href="/" className={styles.logo}>
            <h1>Galleria</h1>
        </Link>
    );
}
