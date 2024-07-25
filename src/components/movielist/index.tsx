import React from "react";
import styled from "styled-components";

import MovieItem from "../movieitem";
import { Genre, MovieSummary } from "../../lib/types";

// Add types for the props of 'MovieList'
type MovieListProps = {
  movies: MovieSummary[];
  genres: Genre[];
};

export default function MovieList({ movies, genres }: MovieListProps) {
  return (
    <MoviesWrapper>
      {/* {movies ? "yesMovies" : "noMovies"}
      {genres ? "yesGenres" : "noGenres"} */}
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </MoviesWrapper>
  );
}

const MoviesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
