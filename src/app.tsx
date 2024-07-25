import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { css } from "styled-components";

import SideNavBar from "./components/sidenavbar";

import Discover from "./pages/discover";

import "./css/app.css";

export default function App() {
  const [activeSideBar, setActiveSideBar] = useState(false);

  // noticed when I was moving around window width, it would still show, this makes it auto close inbetween
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setActiveSideBar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setActiveSideBar]);

  const toggleSideBar = () => {
    setActiveSideBar(!activeSideBar);
  };

  return (
    <Router>
      <PageContainer>
        <SideNavBar activeSideBar={activeSideBar} />
        <ContentWrapper>
          <NavToggleButton
            onClick={toggleSideBar}
            activeSideBar={activeSideBar}
          >
            {activeSideBar ? "Hide Sidebar" : "Show Sidebar"}
          </NavToggleButton>
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
  border: 4px solid pink;
  display: flex;
  min-height: 100dvh;
`;

const ContentWrapper = styled.main`
  flex-grow: 1;
  margin-left: 260px;
  transition: margin-left 0.3s ease-in-out;
  border: 4px solid red;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const NavToggleButton = styled.button<{ activeSideBar: boolean }>`
  margin-left: ${({ activeSideBar }) => (activeSideBar ? "260px" : "45px")};
  transition: margin-left 0.3s ease-in-out;

  @media (min-width: 768px) {
    opacity: 0;
  }
`;
