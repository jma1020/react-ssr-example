import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { loadableReady } from "@loadable/component";
import { hydrateRoot } from "react-dom";

if (typeof window !== "undefined") {
  loadableReady(() => {
    hydrateRoot(document.getElementById("root"), <App />);
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
