import React, { useState } from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export default function SideNavBar({
  activeSideBar,
}: {
  activeSideBar: boolean;
}) {
  /* Write the necessary functions to show/hide the side bar on mobile devices */

  return (
    <SideNavBarCont activeSideBar={activeSideBar}>
      {/* Implement a hamburger icon slide in effect for mobile devices */}
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
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const NavIcon = styled.div`
  position: absolute;
  right: 35px;
  top: 50%;
`;

const SideNavHeader = styled.div``;

const HeaderText = styled.div``;

const NavLink = styled(Link)`
  display: block;
`;
