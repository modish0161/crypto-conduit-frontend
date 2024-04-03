import React from 'react';
import styles from './LoadingSpinner.module.css'; // Assuming CSS Modules for styling

const LoadingSpinner = () => (
    <div className={styles.spinnerContainer} aria-live="assertive" aria-busy="true">
        <div className={styles.spinner}></div>
    </div>
);

export default LoadingSpinner;
