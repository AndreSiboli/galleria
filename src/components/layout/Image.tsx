import styles from '@/styles/layout/Image.module.scss';
import Image from 'next/image';

interface PropTypes {
    src: string;
}

export default function Logo(props: PropTypes) {
    const { src } = props;

    return (
        <div className={styles.image_container}>
            <Image
                src={src}
                alt={'Image is loading...'}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                priority={true}
            ></Image>
        </div>
    );
}
