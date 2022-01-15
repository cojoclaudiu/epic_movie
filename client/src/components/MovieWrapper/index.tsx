import React, { ReactNode } from 'react';
import styles from './movieWrapper.module.css';

interface Props {
  children: ReactNode;
}

function MovieWrapper({ children }: Props): JSX.Element {
  return <div className={styles.movieWrapper}>{children}</div>;
}

export default MovieWrapper;
