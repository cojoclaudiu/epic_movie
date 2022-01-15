import React from 'react';
import Cast from '../Cast';
import DetailsHeader from '../DetailsHeader';
import MoviePhotos from '../MoviePhotos';
import Synopsis from '../Synopsis';
import styles from './movieDetails.module.css';

function MovieDetails() {
  return (
    <section className={styles.movieDetails}>
      <DetailsHeader />

      <div>
        <Synopsis />

        <Cast />
        <div>
          <div>Avatars</div>
        </div>

        <MoviePhotos />

        <div>
          <div>Popularity</div>
          <div>Chart</div>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
