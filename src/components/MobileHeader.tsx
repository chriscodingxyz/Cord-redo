import React from "react";
import styled from "styled-components";
import * as colors from "../colors";
import { useMovieContext } from "../contexts/MovieContext";

interface MobileHeaderProps {
  title: string;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ title }) => {
  const { activeSideBar, toggleSideBar } = useMovieContext();

  return (
    <HeaderWrapper>
      <NavToggleButton onClick={toggleSideBar}>
        {activeSideBar ? "✕" : "☰"}
      </NavToggleButton>
      <PageTitle>{title}</PageTitle>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 45px;
  right: 0;
  display: flex;
  align-items: center;
  /* padding: 10px 20px; */
  background-color: white;
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavToggleButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 3rem;
  margin-right: 15px;
  cursor: pointer;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  /* font-weight: bold; */
  color: ${colors.fontColor};
  margin: 0;
`;

export default MobileHeader;
