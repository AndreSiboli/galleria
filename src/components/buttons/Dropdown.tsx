import styles from '../../styles/Dropdown.module.scss';
import { FaAngleDown } from 'react-icons/fa';

import { FaTree, FaDog, FaCity, FaStar } from 'react-icons/fa';
import { GiAmpleDress } from 'react-icons/gi';
import Link from 'next/link';
import { useState } from 'react';

export default function Dropdown() {
    const [active, setActive] = useState(false);
    const isActive = active ? `${styles.dropdown} ${styles.active}` : styles.dropdown;

    return (
        <nav className={isActive} onClick={() => setActive(!active)}>
            <div className={styles.dropdown_name}>
                <span>Categorias</span>
                <FaAngleDown />
            </div>

            <div className={styles.dropdown_container}>
                <div className={styles.dropdown_wrapper}>
                    <Link href="/category/lifestyle">
                        <span>
                            <FaStar />
                        </span>
                        <span>Lifestyle</span>
                    </Link>
                    <Link href="/category/landscape">
                        <span>
                            <FaTree />
                        </span>
                        <span>Landscape</span>
                    </Link>
                    <Link href="/category/fashion">
                        <span>
                            <GiAmpleDress />
                        </span>
                        <span>Fashion</span>
                    </Link>
                    <Link href="/category/animal">
                        <span>
                            <FaDog />
                        </span>
                        <span>Animal</span>
                    </Link>
                    <Link href="/category/city">
                        <span>
                            <FaCity />
                        </span>
                        <span>City</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
