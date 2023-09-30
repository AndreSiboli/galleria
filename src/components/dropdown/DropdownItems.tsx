import { IconType } from 'react-icons/lib';
import styles from '@/styles/dropdown/DropdownItems.module.scss';

import Link from 'next/link';

interface PropTypes {
    data: {
        link: string;
        text: string;
        svg: any;
    };
}

export default function DropdownItem(props: PropTypes) {
    const { data } = props;
    const { link, text, svg } = data;

    return (
        <div className={styles.item}>
            <Link href={link}>
                <span className={styles.item_svg}>{svg}</span>
                <span className={styles.item_text}>{text}</span>
            </Link>
        </div>
    );
}
