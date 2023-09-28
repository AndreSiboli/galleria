import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import styles from '@/styles/home/GridImage.module.scss';

import Link from 'next/link';
import Img from '../layout/Image';

interface PropTypes {
    image: StaticImport;
    text: string;
    to: string;
}

export default function GridImage({ data }: { data: PropTypes }) {
    const { image, text, to } = data;

    return (
        <Link href={to} className={styles.picture}>
            <Img src={image} alt="" style={{ width: '100%', height: '90%' }} />
            <p>{text}</p>
        </Link>
    );
}
