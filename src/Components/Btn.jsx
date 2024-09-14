// Btn.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addCounter, minusCounter } from '../Store/Slice/CounterSlice';
import styles from './Btn.module.css'; // Import CSS Module

const Btn = () => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addCounter());
    };

    const handleMinus = () => {
        dispatch(minusCounter());
    };

    return (
        <div className={styles.btnContainer}>
            <button className={`${styles.btn} ${styles.add}`} onClick={handleAdd}>Add</button>
            <button className={`${styles.btn} ${styles.subtract}`} onClick={handleMinus}>Subtract</button>
        </div>
    );
};

export default Btn;

