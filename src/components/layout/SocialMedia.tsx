import styles from '@/styles/layout/SocialMedia.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface PropTypes {
    hidden?: boolean;
}

export default function SocialMedia(props: PropTypes) {
    const { hidden = false } = props;
    const isHidden = !hidden
        ? styles.socialMedia_container
        : `${styles.socialMedia_container} ${styles.hidden}`;

    return (
        <div className={isHidden}>
            <a href="https://github.com/AndreSiboli" target="blank" aria-label="Github">
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/andr%C3%A9-siboli-81b969244/"
                target="blank"
                aria-label="Linkedin"
            >
                <FaLinkedin />
            </a>
        </div>
    );
}
