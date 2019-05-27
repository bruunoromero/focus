import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import "./firebase";
import { hidden, visible } from "./stores/app";
import * as serviceWorker from "./serviceWorker";

import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    visible();
  } else if (document.visibilityState === "hidden") {
    hidden();
  }
});
