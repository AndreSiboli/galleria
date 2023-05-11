import { ChangeEvent } from 'react';
import styles from '../../styles/form/Input.module.scss';

interface PropTypes {
    id: string;
    type: string;
    text: string;
    value: string,
    handleInput: Function,
}

export default function Input(props: PropTypes) {
    const { id, type, text, handleInput, value } = props;

    function getValue(e: ChangeEvent<HTMLInputElement>) {   
        handleInput(e)
    }

    return (
        <div className={styles.input_container}>
            <input type={type} value={value} name={id} id={id} onChange={(e) => getValue(e)} />
            <label htmlFor={id}>{text}</label>
        </div>
    );
}
