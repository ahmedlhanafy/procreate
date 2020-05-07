import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Gallery } from "./Gallery";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path={["/rename/:renameId", "/:id", "/"]} component={Gallery} />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
