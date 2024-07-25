import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { css } from "styled-components";

import SideNavBar from "./components/sidenavbar";

import Discover from "./pages/discover";

import "./css/app.css";
import { useMovieContext } from "./contexts/MovieContext";

export default function App() {
  // const { activeSideBar, toggleSideBar } = useMovieContext();

  return (
    <Router>
      <PageContainer>
        <SideNavBar />
        <ContentWrapper>
          {/* <NavToggleButton
            onClick={toggleSideBar}
            activeSideBar={activeSideBar}
          >
            {activeSideBar ? "✕" : "☰"}
          </NavToggleButton> */}
          <Switch>
            <Route path="/discover" component={Discover} />
          </Switch>
        </ContentWrapper>
      </PageContainer>
    </Router>
  );
}

const PageContainer = styled.main`
  overflow-x: hidden;
  display: flex;
  min-height: 100dvh;
`;

const ContentWrapper = styled.main`
  flex-grow: 1;
  margin-left: 260px;
  transition: margin-left 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

// const NavToggleButton = styled.button<{ activeSideBar: boolean }>`
//   position: fixed;
//   z-index: 10;
//   top: 45px;
//   background-color: transparent;
//   border: none;
//   font-size: 2.5rem;

//   margin-left: ${({ activeSideBar }) => (activeSideBar ? "260px" : "45px")};
//   transition: margin-left 0.3s ease-in-out;

//   @media (min-width: 768px) {
//     opacity: 0;
//   }
// `;
