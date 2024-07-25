import React from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import ExpandableFilters from "../expandablefilters";
import SearchBar from "../searchbar";

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
        Search filters cont
        {/* Implement a SearchBar component and use it for both the keyword and the year inputs */}
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
