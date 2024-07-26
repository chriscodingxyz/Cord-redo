import React from "react";
import styled from "styled-components";
import { MovieSummary } from "../lib/types";
import * as colors from "../colors";

type MovieModalProps = {
  movie: MovieSummary;
  onClose: () => void;
};

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalTitle>{movie.title}</ModalTitle>
        <ModalImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <ModalOverview>{movie.overview}</ModalOverview>
        <ModalInfo>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average.toFixed(1)}</p>
        </ModalInfo>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000000;

  /* @media (max-width: 1024px) {
    justify-content: center;
  } */
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  color: ${colors.fontColor};
  margin-bottom: 10px;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ModalOverview = styled.p`
  color: ${colors.fontColor};
  margin-bottom: 10px;
`;

const ModalInfo = styled.div`
  color: ${colors.primaryColor};
`;

export default MovieModal;
