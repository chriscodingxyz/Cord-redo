import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

describe("App Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the SideNavBar", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    const sideNavBar = div.querySelector(".side-nav-bar");
    expect(sideNavBar).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the ContentWrapper", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    const contentWrapper = div.querySelector("main");
    expect(contentWrapper).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Discover component when on /discover route", () => {
    window.history.pushState({}, "", "/discover");
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    const discoverComponent = div.querySelector(".discover-page");
    expect(discoverComponent).toBeTruthy();
    ReactDOM.unmountComponentAtNode(div);
  });
});
