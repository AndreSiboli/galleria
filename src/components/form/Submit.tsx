import { ChangeEvent } from 'react';
import styles from '../../styles/form/Submit.module.scss';

interface PropTypes {
    id: string;
    text: string;
    handleSubmit: Function;
}

export default function Submit(props: PropTypes) {
    const { id, text, handleSubmit } = props;

    function getValue(e: ChangeEvent<HTMLTextAreaElement>) {
        handleSubmit(e);
    }

    return (
        <div className={styles.input_container}>
            <button type='submit' id={id}>{text}</button>
        </div>
    );
}