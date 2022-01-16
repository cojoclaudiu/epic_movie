import React from 'react';
import styles from './moviePoster.module.css';
import Button from '../Button';
import { useGetMovieDataQuery } from '../../store/services/movie';
import GenreLabels from '../GenreLabels';
import MovieRating from '../MovieRating';
import Duration from '../Duration';

function MoviePoster() {
  const { data, isLoading } = useGetMovieDataQuery();

  const { name, image, genre, aggregateRating, duration } = data ?? {};

  return (
    <div className={styles.moviePoster}>
      {isLoading ? 'loading...' : <img className={styles.poster} src={image} />}
      <div className={styles.addToWatchlist}>
        <Button color="primary" onClick={() => {}}>
          ADD TO WATCHLIST
        </Button>
      </div>
      <div className={styles.posterDetails}>
        <GenreLabels labels={genre} />
        <div className={styles.posterTitle}>{name}</div>
        <MovieRating rating={aggregateRating?.ratingValue ?? 'n/a'} />
        <Duration duration={duration ?? 'n/a'} />
      </div>
    </div>
  );
}

export default MoviePoster;
