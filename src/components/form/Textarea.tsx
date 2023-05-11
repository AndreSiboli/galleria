import { ChangeEvent } from 'react';
import styles from '../../styles/form/Textarea.module.scss';

interface PropTypes {
    id: string;
    text: string;
    value: string;
    handleInput: Function;
}

export default function Input(props: PropTypes) {
    const { id, text, handleInput, value } = props;

    function getValue(e: ChangeEvent<HTMLTextAreaElement>) {
        handleInput(e);
    }

    return (
        <div className={styles.input_container}>
            <textarea
                name={id}
                id={id}
                cols={30}
                rows={10}
                value={value}
                onChange={(e) => getValue(e)}
            ></textarea>
            <label htmlFor={id}>{text}</label>
        </div>
    );
}
