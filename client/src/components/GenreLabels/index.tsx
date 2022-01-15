import React from 'react';
import DotsElastic from '../Loading/DotsElastic';
import styles from './genreLabels.module.css';

type GenreLabelsProps = {
  labels?: Array<string>;
};

function GenreLabels({ labels }: GenreLabelsProps) {
  return (
    <div className={styles.labelContainer}>
      {labels?.length ? (
        labels?.map((label: string) => {
          return (
            <div key={label} className={styles.label}>
              {label}
            </div>
          );
        })
      ) : (
        <DotsElastic />
      )}
    </div>
  );
}

export default GenreLabels;
