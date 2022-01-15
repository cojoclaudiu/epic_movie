import React from 'react';
import timeFormat from '../../utils/time';
import styles from './duration.module.css';

type DurationProps = {
  duration: string;
};

function Duration({ duration }: DurationProps) {
  return <div className={styles.duration}>{timeFormat(duration)}</div>;
}

export default Duration;
