import React from 'react';
import styles from './rating.module.css';

type RatingProps = {
  rating: string;
};

function MovieRating({ rating }: RatingProps) {
  return <div className={styles.rating}>{rating}</div>;
}

export default MovieRating;
