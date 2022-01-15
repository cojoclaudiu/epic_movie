import React from 'react';
import styles from './recommendedSidebar.module.css';
import recommended from './recomended.json';

function RecommendedSidebar() {
  return (
    <aside className={styles.recommendedSidebar}>
      {recommended.map((image) => {
        return <img className={styles.relatedMovie} key={image.id} src={image.url} />;
      })}
    </aside>
  );
}

export default RecommendedSidebar;
