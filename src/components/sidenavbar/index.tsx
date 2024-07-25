import React, { useState } from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

interface NavIconProps {
  arrow?: boolean;
  search?: boolean;
}

export default function SideNavBar({
  activeSideBar,
}: {
  activeSideBar: boolean;
}) {
  return (
    <SideNavBarCont activeSideBar={activeSideBar}>
      <SideNavMainLink
        className="menu_nav_link main_nav_link"
        to="/"
        activeClassName="active"
        exact
      >
        Wesley
        {/* Add types for the props of 'NavIcon' */}
        <NavIcon arrow></NavIcon>
      </SideNavMainLink>
      <SideNavMainLink
        className="menu_nav_link"
        to="/discover"
        activeClassName="active"
      >
        Discover
        <NavIcon search></NavIcon>
      </SideNavMainLink>
      <SideNavHeader>
        <HeaderText>Watched</HeaderText>
      </SideNavHeader>
      <NavLink
        className="menu_nav_link"
        to="/watched/movies"
        activeClassName="active"
      >
        Movies
      </NavLink>
      <NavLink
        className="menu_nav_link"
        to="/watched/tv-shows"
        activeClassName="active"
      >
        Tv Shows
      </NavLink>
      <SideNavHeader>
        <HeaderText>Saved</HeaderText>
      </SideNavHeader>
      <NavLink
        className="menu_nav_link"
        to="/saved/movies"
        activeClassName="active"
      >
        Movies
      </NavLink>
      <NavLink
        className="menu_nav_link"
        to="/saved/tv-shows"
        activeClassName="active"
      >
        Tv Shows
      </NavLink>
    </SideNavBarCont>
  );
}

const SideNavBarCont = styled.div<{ activeSideBar: boolean }>`
  position: fixed;
  z-index: 9;
  width: 260px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    transform: ${({ activeSideBar }) =>
      activeSideBar ? "translateX(0)" : "translateX(-260px)"};
  }
`;

const SideNavMainLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
  background-color: ${colors.sideNavBar};

  &:hover {
    background-color: ${colors.sideNavBarHover};
  }
  &.active {
    background-color: ${colors.primaryColor};
  }
`;

const NavIcon = styled.div<NavIconProps>`
  width: 29px;
  height: 29px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) =>
    props.arrow
      ? `url(${Arrow})`
      : props.search
      ? `url(${SearchWhite})`
      : "none"};
`;

const SideNavHeader = styled.div`
  padding: 25px 35px 15px;
`;

const HeaderText = styled.div`
  font-size: 1.6em;
  font-weight: 400;
  color: white;
  padding-bottom: 15px;
  border-bottom: 1px solid ${colors.fontColor};
`;

const NavLink = styled(Link)`
  display: block;
  padding: 10px 35px;
  font-size: 1.3em;
  color: ${colors.fontColor};
  text-decoration: none;

  &:hover {
    background-color: ${colors.sideNavBarHover};
  }
  &.active {
    background-color: ${colors.primaryColor};
  }
`;
