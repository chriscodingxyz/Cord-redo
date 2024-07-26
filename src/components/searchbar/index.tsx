import React, { useEffect } from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import { useMovieContext } from "../../contexts/MovieContext";
import FilterIcon from "../../images/filter-icon.png";
import { useDebounce } from "../../lib/hooks";

export default function SearchBar() {
  const {
    searchQuery,
    setSearchQuery,
    year,
    setYear,
    searchMovies,
    searchPopularMovies,
    isFilterOpen,
    setIsFilterOpen,
  } = useMovieContext();

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (!debouncedSearchQuery) {
      searchPopularMovies();
    } else {
      searchMovies(debouncedSearchQuery, year || 0);
    }
  }, [debouncedSearchQuery, year]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setSearchQuery(newQuery);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, 4);
    const newYear = input === "" ? null : parseInt(input, 10);
    setYear(newYear || 0);
    if (searchQuery) {
      searchMovies(searchQuery, newYear || 0);
    }
  };

  const toggleFilter = () => {
    if (window.innerWidth < 1024) {
      setIsFilterOpen((prev) => !prev);
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
        {window.innerWidth < 1024 && (
          <FilterToggleButton
            isFilterOpen={isFilterOpen}
            onClick={toggleFilter}
          >
            <FilterIconImg src={FilterIcon} alt="Filter" />
          </FilterToggleButton>
        )}
      </SearchInputWrapper>
      {isFilterOpen && (
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
      )}
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

const FilterToggleButton = styled.button<{ isFilterOpen: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  position: absolute;
  right: 0;
  transform: ${(props) => (props.isFilterOpen ? "rotate(90deg)" : "rotate(0)")};
  transition: transform 0.3s ease-in-out;
`;

const FilterIconImg = styled.img`
  height: 30px;
  width: auto;
`;
