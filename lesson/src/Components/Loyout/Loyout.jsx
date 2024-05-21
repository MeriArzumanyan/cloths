import React from "react";
import { Outlet } from "react-router-dom";
import st from "./Loyout.module.css";
import { Nav } from "../Nav/Nav";
const Loyout = () => {
  return (
    <div className={st.loyout}>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Loyout;
