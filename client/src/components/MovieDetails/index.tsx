import React from 'react';
import { useGetMovieDataQuery } from '../../store/services/movie';
import Cast from '../Cast';
import DetailsHeader from '../DetailsHeader';
import MoviePhotos from '../MoviePhotos';
import Synopsis from '../Synopsis';
import styles from './movieDetails.module.css';

function MovieDetails() {
  const { data, isLoading } = useGetMovieDataQuery();
  const { trailer } = data ?? {};

  return (
    <section className={styles.movieDetails}>
      <DetailsHeader />

      <div>
        <Synopsis description={trailer?.description ?? 'n/a'} />

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
