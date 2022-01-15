import React from 'react';
import styles from './detailsHeader.module.css';

function DetailsHeader() {
  return (
    <div className={styles.headerDetails}>
      <div className={styles.headerItem}>General</div>
      <div className={styles.headerItem}>Storyline</div>
      <div className={styles.headerItem}>Did you know?</div>
      <div className={styles.headerItem}>User Reviews</div>
    </div>
  );
}

export default DetailsHeader;
