import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { data } from "./db.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App data={data}/>
  </BrowserRouter>
);
