import React from 'react';
import styles from './cast.module.css';

function Cast() {
  return (
    <section>
      <div className={styles.metaItem}>
        <div className={styles.metaItemTitle}>Directors:</div>
        <div>Jared Bush, Byron Howard, Charise Castro Smith</div>
      </div>

      <div className={styles.metaItem}>
        <div className={styles.metaItemTitle}>Writers:</div>
        <div>Charise Castro Smith, Jared Bush, Byron Howard</div>
      </div>

      <div className={styles.metaItem}>
        <div className={styles.metaItemTitle}>Stars:</div>
        <div>Stephanie Beatri, María Cecilia Botero, John Leguizamo</div>
      </div>
    </section>
  );
}

export default Cast;
