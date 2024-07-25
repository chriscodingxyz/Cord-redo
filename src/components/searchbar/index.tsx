import React, { useState } from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import { useMovieContext } from "../../contexts/MovieContext";

export default function SearchBar() {
  const { searchQuery, setSearchQuery, year, setYear, searchMovies } =
    useMovieContext();

  return (
    <FlexColDiv>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          searchMovies(searchQuery, year || 0);
        }}
        placeholder="Search"
      />
      <input
        type="text"
        value={year || ""}
        onChange={(e) => {
          setYear(+e.target.value);
          if (!searchQuery) return;
          searchMovies(searchQuery, year);
        }}
        placeholder="Year"
      />
    </FlexColDiv>
  );
}

const FlexColDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;
