import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import App from "./App";
import { Gallery } from "./Gallery";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Gallery />
  </React.StrictMode>,
  rootElement
);
