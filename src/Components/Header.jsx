// Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.css'; // Import CSS Module

const Header = () => {
    const { counter } = useSelector((state) => state.CounterReducer);

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Counter: {counter}</h1>
        </div>
    );
};

export default Header;

