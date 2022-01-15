import React from 'react';
import images from './images.json';
import styles from './moviePhotos.module.css';

function MoviePhotos() {
  return (
    <div className={styles.photosContainer}>
      {images.map((image) => {
        return <img className={styles.photoItem} key={image.id} src={image.url} />;
      })}
    </div>
  );
}
export default MoviePhotos;
