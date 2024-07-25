import React from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import ExpandableFilters from "../expandablefilters";
import SearchBar from "../searchbar/index";
import CheckBox from "../checkbox";
import { useMovieContext } from "../../contexts/MovieContext";

// Add types for the props of 'SearchFilters' and the styled component 'SearchFiltersCont'
type SearchFiltersProps = {
  genres: any;
  ratings: any;
  languages: any;
  searchMovies: any;
};

interface SearchFiltersContProps {
  marginBottom?: boolean;
}

export default function SearchFilters() {
  const { genres, ratingOptions } = useMovieContext();

  console.log("lang options");

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar />
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movie</CategoryTitle>

        <ExpandableFilters title="Select genre(s)" open>
          {genres.map((genre: any) => (
            <CheckBox key={genre.id} value={genre.name} />
          ))}
        </ExpandableFilters>

        <ExpandableFilters title="Select min. vote">
          {genres.map((genre: any) => (
            <CheckBox key={genre.id} value={genre.name} />
          ))}
        </ExpandableFilters>
        {/* 
        <ExpandableFilters title="Select language">
          {languages.map((language: any) => (
            <CheckBox key={crypto.randomUUID()} value={language.name} />
          ))}
        </ExpandableFilters> */}

        {/* Implement a component called "ExpandableFilters" and use it for the filter categories */}
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
  width: 250px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const SearchFiltersCont = styled.div<SearchFiltersContProps>`
  background-color: white;
  border: 4px solid green;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div``;
