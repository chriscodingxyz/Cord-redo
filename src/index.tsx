import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { MovieProvider } from "./contexts/MovieContext";

ReactDOM.render(
  <MovieProvider>
    <App />
  </MovieProvider>,
  document.getElementById("root")
);
