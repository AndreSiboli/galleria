import styles from '@/styles/layout/Image.module.scss';

interface PropTypes {
    src: string;
}

export default function Logo(props: PropTypes) {
    const { src } = props;

    return (
        <div className={styles.image_container}>
            <img src={src} alt="" loading='lazy'/>
        </div>
    );
}
