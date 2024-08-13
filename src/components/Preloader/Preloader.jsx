import React from 'react';
import styles from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
