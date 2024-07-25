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
    <HeaderWrapper activeSideBar={activeSideBar}>
      <NavToggleButton activeSideBar={activeSideBar} onClick={toggleSideBar}>
        {"☰"}
      </NavToggleButton>
      <PageTitle>{title}</PageTitle>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header<{ activeSideBar: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  transition: padding 0.3s ease-in-out;
  padding-left: ${(props) => (props.activeSideBar ? "260px" : "15px")};

  right: 0;
  display: flex;
  align-items: center;
  /* padding: 10px 20px; */
  background-color: ${colors.lightBackground};
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavToggleButton = styled.button<{ activeSideBar: boolean }>`
  background-color: transparent;
  border: none;
  padding-left: 0;
  font-size: 3rem;
  margin-right: 5px;
  cursor: pointer;
  transform: ${(props) =>
    props.activeSideBar ? "rotate(90deg)" : "rotate(0)"};
  transition: transform 0.3s ease-in-out;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  /* font-weight: bold; */
  color: ${colors.fontColor};
  margin: 0;
`;

export default MobileHeader;
