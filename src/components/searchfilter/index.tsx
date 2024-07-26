//backup till here

import React from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import ExpandableFilters from "../expandablefilters";
import SearchBar from "../searchbar/index";
import CheckBox from "../checkbox";
import { useMovieContext } from "../../contexts/MovieContext";
import { ratingOptions } from "../../lib/data";

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
  const { genres, languages, isFilterOpen } = useMovieContext();

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar />
      </SearchFiltersCont>
      {isFilterOpen && (
        <SearchFiltersCont>
          <CategoryTitle>Movie</CategoryTitle>

          <ExpandableFilters title="Select genre(s)" open>
            {genres.map((genre: any) => (
              <CheckBox key={genre.id} value={genre.name} />
            ))}
          </ExpandableFilters>

          <ExpandableFilters title="Select min. vote">
            {ratingOptions.map((options: any) => (
              <CheckBox key={options.id} value={String(options.name)} />
            ))}
          </ExpandableFilters>

          <ExpandableFilters title="Select language">
            {languages
              .sort((a, b) => a.english_name.localeCompare(b.english_name))
              .map((language: any) => (
                <CheckBox
                  key={language.iso_639_1}
                  value={`${
                    language.english_name
                  } - ${language.iso_639_1.toUpperCase()}`}
                />
              ))}
          </ExpandableFilters>
        </SearchFiltersCont>
      )}
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
  padding: 20px;
  border-radius: 3px;

  transition: all 0.3s ease-in-out;

  @media (max-width: 1024px) {
    background-color: ${colors.lightBackground};
    padding: 20px 0;
  }

  @media (max-width: 768px) {
    background-color: ${colors.lightBackground};
    padding: 20px 0;
  }

  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div``;
