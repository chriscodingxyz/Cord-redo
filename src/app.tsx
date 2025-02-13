import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import styled, { css } from "styled-components";

import SideNavBar from "./components/sidenavbar";

import Discover from "./pages/discover";

import "./css/app.css";
import { MovieProvider, useMovieContext } from "./contexts/MovieContext";

export default function App() {
  return (
    <MovieProvider>
      <Router>
        <PageContainer>
          <SideNavBar />
          <ContentWrapper>
            <Switch>
              <Route path="/discover" component={Discover} />
              <Redirect from="/" to="/discover" exact />
            </Switch>
          </ContentWrapper>
        </PageContainer>
      </Router>
    </MovieProvider>
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
