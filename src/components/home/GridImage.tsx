import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import styles from '@/styles/home/GridImage.module.scss';

import Image from 'next/image';
import Link from 'next/link';

interface PropTypes {
    image: StaticImport;
    text: string;
    to: string;
}

export default function GridImage({ data }: { data: PropTypes }) {
    const { image, text, to } = data;
    return (
        <Link href={to} className={styles.picture}>
            <Image
                src={image}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                priority
                style={{ width: '100%', height: '90%' }}
            />
            <p>{text}</p>
        </Link>
    );
}
