import React, { useState } from "react";
import styled from "styled-components";
import * as colors from "../../colors";
import { MovieSummary, Genre } from "../../lib/types";
import { useMovieContext } from "../../contexts/MovieContext";
import MovieModal from "../MovieModal";

type MovieItemProps = {
  movie: MovieSummary;
};

export default function MovieItem({ movie }: MovieItemProps) {
  const { getGenreNames, genres } = useMovieContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const movieGenres = genres?.length > 0 ? getGenreNames(movie.genre_ids) : "";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <MovieItemWrapper onClick={openModal}>
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
      {isModalOpen && <MovieModal movie={movie} onClose={closeModal} />}
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  margin-bottom: 20px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.lightBackground};
  }
`;

const LeftCont = styled.div`
  width: 200px;
  margin-right: 20px;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1024px) {
    width: 175px;
  }

  @media (max-width: 768px) {
    width: 150px;
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
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MovieGenres = styled.p`
  color: ${colors.primaryColor};
  font-size: 0.9rem;
  margin: 0 0 10px 0;
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const MovieOverview = styled.p`
  font-size: 1rem;
  color: ${colors.fontColor};
  flex-grow: 1;
  margin: 0 0 10px 0;
  /* border: 1px solid red; */
  max-height: 180px;

  overflow-y: auto;
  text-overflow: ellipsis;
  display: -webkit-box;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
    max-height: 170px;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
    max-height: 150px;
  }
`;

const MovieDate = styled.p`
  font-size: 0.9rem;
  color: ${colors.primaryColor};
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
const MovieRating = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${colors.primaryColor};
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 6px;

  @media (max-width: 1200px) {
    top: auto;
    right: auto;
    bottom: 10px;
    left: 10px;
  }
`;
