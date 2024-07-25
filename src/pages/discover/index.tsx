import React, { useEffect, useState } from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import { useMovieContext } from "../../contexts/MovieContext";
import MobileHeader from "../../components/MobileHeader";

export default function Discover() {
  const {
    genres,
    languageOptions,
    ratingOptions,
    totalCount,
    results,
    isLoading,
    error,
    searchMovies,
  } = useMovieContext();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <MobileHeader title="Discover" />
      <DiscoverWrapper>
        <MovieFilters>
          <SearchFilters
          // genres={genres}
          // ratings={ratingOptions}
          // languages={languageOptions}
          // searchMovies={searchMovies}
          />
        </MovieFilters>
        <MovieResults>
          {totalCount > 0 && <TotalCounter>{totalCount} movies</TotalCounter>}
          <MovieList movies={results || []} genres={genres} />
        </MovieResults>
      </DiscoverWrapper>
    </>
  );
}

const DiscoverWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 15px;
  padding: 45px 45px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const TotalCounter = styled.div`
  /* font-weight: 900; */
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
// const MobilePageTitle = styled.header`
//   display: fixed;
//   top: 0;
//   left: 0;
//   font-size: 24px;
//   font-weight: bold;
//   /* margin-bottom: 20px; */
//   color: ${colors.fontColor};

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;
