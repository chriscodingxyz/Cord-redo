import React from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import ExpandableFilters from "../expandablefilters";
import SearchBar from "../searchbar/index";

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

export default function SearchFilters({
  genres,
  ratings,
  languages,
  searchMovies,
}: SearchFiltersProps) {
  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar />
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Search Filter Category title</CategoryTitle>
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
