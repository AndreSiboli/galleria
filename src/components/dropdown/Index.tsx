import { useState } from 'react';
import styles from '@/styles/dropdown/Dropdown.module.scss';

import DropdownItem from '@/components/dropdown/DropdownItems';

import { FaTree, FaDog, FaCity, FaStar, FaAngleDown } from 'react-icons/fa';
import { GiAmpleDress } from 'react-icons/gi';

export default function Dropdown() {
    const [active, setActive] = useState(false);
    const isActive = active ? `${styles.dropdown} ${styles.active}` : styles.dropdown;

    const items = [
        {
            text: 'Lifestyle',
            svg: <FaStar />,
            link: '/category/lifestyle',
        },
        {
            text: 'Landscape',
            svg: <FaTree />,
            link: '/category/landscape',
        },
        {
            text: 'Fashion',
            svg: <GiAmpleDress />,
            link: '/category/fashion',
        },
        {
            text: 'Animal',
            svg: <FaDog />,
            link: '/category/animal',
        },
        {
            text: 'City',
            svg: <FaCity />,
            link: '/category/city',
        },
    ];

    return (
        <nav className={isActive} onClick={() => setActive(!active)}>
            <div className={styles.dropdown_button}>
                <span>Categorias</span>
                <FaAngleDown />
            </div>

            <div className={styles.items}>
                <div className={styles.items_container}>
                    {items.map((item) => (
                        <DropdownItem key={item.text} data={item} />
                    ))}
                </div>
            </div>
        </nav>
    );
}
