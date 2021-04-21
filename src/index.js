import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import Login from "./components/login/login";

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById("root")
);
