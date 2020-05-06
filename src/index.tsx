import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import { Gallery } from "./Gallery";
import { ImageView } from "./ImageViewer";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path={["/rename/:renameId", "/:id", "/"]} component={Gallery} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
