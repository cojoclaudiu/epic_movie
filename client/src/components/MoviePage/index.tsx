import React from 'react';
import MovieDetails from '../MovieDetails';
import MoviePoster from '../MoviePoster';
import MovieWrapper from '../MovieWrapper';
import RecommendedSidebar from '../RecommendedSidebar';
import SidebarMenu from '../SidebarMenu';

function MoviePage() {
  return (
    <MovieWrapper>
      <SidebarMenu />
      <MoviePoster />
      <MovieDetails />
      <RecommendedSidebar />
    </MovieWrapper>
  );
}

export default MoviePage;
