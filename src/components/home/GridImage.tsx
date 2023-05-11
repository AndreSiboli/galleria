import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/home/GridImage.module.scss';

interface PropTypes {
    image: string;
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
                style={{ width: '100%', height: '90%'}}
            ></Image>
            <p>{text}</p>
        </Link>
    );
}
