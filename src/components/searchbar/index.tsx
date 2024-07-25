import React, { useEffect } from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import { useMovieContext } from "../../contexts/MovieContext";

export default function SearchBar() {
  const {
    searchQuery,
    setSearchQuery,
    year,
    setYear,
    searchMovies,
    searchPopularMovies,
  } = useMovieContext();

  useEffect(() => {
    if (!searchQuery) {
      searchPopularMovies();
    }
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
    if (newQuery) {
      searchMovies(newQuery, year || 0);
    } else {
      searchPopularMovies();
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, 4);
    const newYear = input === "" ? null : parseInt(input, 10);
    setYear(newYear || 0);
    if (searchQuery) {
      searchMovies(searchQuery, newYear || 0);
    }
  };

  return (
    <FlexColDiv>
      <SearchInputWrapper>
        <SearchInput
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for movies"
        />
        <SearchIconImg src={SearchIcon} alt="Search" />
      </SearchInputWrapper>
      <SearchInputWrapper>
        <SearchInput
          type="text"
          value={year === 0 ? "" : year}
          onChange={handleYearChange}
          placeholder="Year of release"
          maxLength={4}
        />
        <SearchIconImg src={CalendarIcon} alt="Calendar" />
      </SearchInputWrapper>
    </FlexColDiv>
  );
}

const FlexColDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${colors.primaryColor};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  padding-left: 35px;
  border: none;
  font-size: 1rem;
  color: ${colors.primaryColor};
  font-weight: bold;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: normal;
    color: ${colors.primaryColor};
  }
`;

const SearchIconImg = styled.img`
  position: absolute;
  left: 0px;
  height: 25px;
  width: auto;
`;
