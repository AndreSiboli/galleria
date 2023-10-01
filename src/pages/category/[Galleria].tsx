import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getImages } from '@/requests/requests';
import styles from '@/styles/pages/Galleria.module.scss';

import Container from '@/components/layout/Container';
import Image from '@/components/layout/Image';

interface ImagesTypes {
    id: number;
    image: string;
    alt: string;
}

export default function Galleria() {
    const Router = useRouter();
    const { Galleria } = Router.query;
    const [images, setImages] = useState<ImagesTypes[]>([]);
    const [title, setTitle] = useState('');
    const [scroll, setScroll] = useState(0);
    const [resize, setResize] = useState(true);
    const [page, setPage] = useState(1);

    function isBigger() {
        if (window.innerWidth >= 900) return setResize(true);
        setResize(false);
    }

    useEffect(() => {
        isBigger();
    }, []);

    useEffect(() => {
        isBigger();

        window.addEventListener('resize', isBigger);

        return () => {
            window.removeEventListener('resize', isBigger);
        };
    }, [resize]);

    useEffect(() => {
        function scrolling() {
            setScroll(window.scrollY);
        }

        window.addEventListener('scroll', scrolling);

        return () => {
            window.removeEventListener('scroll', scrolling);
        };
    }, [scroll]);

    useEffect(() => {
        const totalScroll =
            Math.max(document.body.scrollHeight, document.body.offsetHeight) - window.innerHeight;

        if (totalScroll - scroll <= totalScroll / 2) {
            if (images.length === 0) return;
            const gettingImages = async () => {
                await settingImages(page + 1);
                setPage(page + 1);
            };
            gettingImages();
        }
    }, [scroll]);

    useEffect(() => {
        if (Galleria && typeof Galleria === 'string') {
            const firstLetter = Galleria[0].toUpperCase();
            setTitle(`${firstLetter}${Galleria.substring(1, Galleria.length)}`);
        }
        setImages([]);
        setPage(1);
    }, [Galleria]);

    useEffect(() => {
        settingImages(page);
    }, [title]);

    async function settingImages(currentPage: number) {
        if (typeof Galleria !== 'string') return;
        const data = await getImages(Galleria, currentPage);

        if (!data) return;

        setImages([...images, ...data]);
    }

    function render(startIndex: number) {
        return (
            <div className={styles.galleria_column}>
                {images
                    .filter((item, index) => index % 3 === startIndex)
                    .map((item, index) => (
                        <Image src={item.image} alt={item.alt} key={item.id} />
                    ))}
            </div>
        );
    }

    function mobileResize(startIndex: number) {
        return (
            <div className={styles.galleria_column}>
                {images
                    .filter((item, index) => index % 2 === startIndex)
                    .map((item, index) => (
                        <Image src={item.image} alt={item.alt} key={item.id} />
                    ))}
            </div>
        );
    }

    return (
        <section className={styles.galleria}>
            <Container>
                <div className={styles.galleria_container}>
                    <div className={styles.galleria_title}>
                        <h1>{title}</h1>
                    </div>
                    <div className={styles.galleria_group}>
                        {resize && (
                            <>
                                <>{render(0)}</>
                                <>{render(1 % 3)}</>
                                <>{render(2 % 3)}</>
                            </>
                        )}
                        {!resize && (
                            <>
                                <>{mobileResize(0)}</>
                                <>{mobileResize(1)}</>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
