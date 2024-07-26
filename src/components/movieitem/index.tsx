import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";
import { MovieSummary, Genre } from "../../lib/types";
import { useMovieContext } from "../../contexts/MovieContext";

type MovieItemProps = {
  movie: MovieSummary;
};

export default function MovieItem({ movie }: MovieItemProps) {
  const { getGenreNames, genres } = useMovieContext();

  const movieGenres = genres?.length > 0 ? getGenreNames(movie.genre_ids) : "";

  return (
    <MovieItemWrapper>
      <LeftCont>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      </LeftCont>
      <RightCont>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieGenres>{movieGenres}</MovieGenres>
        <MovieOverview>{movie.overview}</MovieOverview>
        <MovieDate>{movie.release_date}</MovieDate>
      </RightCont>
      <MovieRating>{movie.vote_average.toFixed(1)}</MovieRating>
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  margin-bottom: 20px;
  padding: 20px;
`;

const LeftCont = styled.div`
  width: 200px;
  margin-right: 20px;
  img {
    width: 100%;
    height: auto;
  }
`;

const RightCont = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MovieTitle = styled.h3`
  font-size: 1.4rem;
  color: ${colors.fontColor};
  margin: 0 0 10px 0;
`;

const MovieGenres = styled.p`
  color: ${colors.primaryColor};
  font-size: 0.9rem;
  margin: 0 0 10px 0;
`;

const MovieOverview = styled.p`
  font-size: 1rem;
  color: ${colors.fontColor};
  flex-grow: 1;
  margin: 0 0 10px 0;
`;

const MovieDate = styled.p`
  font-size: 0.9rem;
  color: ${colors.primaryColor};
  margin: 0;
`;

const MovieRating = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${colors.primaryColor};
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  padding: 5px 10px;
  font-weight: bold;
`;
