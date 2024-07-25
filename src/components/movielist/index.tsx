import React from "react";
import styled from "styled-components";

import MovieItem from "../movieitem";

// Add types for the props of 'MovieList'
type MovieListProps = {
  movies: any;
  genres: any;
};

export default function MovieList({ movies, genres }: MovieListProps) {
  return (
    <MoviesWrapper>
      {/* Finish the MovieItem component and use it here to display the movie results */}
    </MoviesWrapper>
  );
}

const MoviesWrapper = styled.div`
  position: relative;
`;
