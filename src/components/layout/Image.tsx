import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import styles from '@/styles/layout/Image.module.scss';

import Image from 'next/image';
import { CSSProperties } from 'react';

interface PropTypes {
    src: StaticImport | string;
    alt?: string;
    style?: CSSProperties;
}

export default function Img(props: PropTypes) {
    const { src, alt = '', style } = props;

    return (
        <div className={styles.image_container}>
            <Image
                src={src}
                alt={alt}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                style={{ width: '100%', height: '100%', ...style }}
                priority={true}
            ></Image>
        </div>
    );
}
