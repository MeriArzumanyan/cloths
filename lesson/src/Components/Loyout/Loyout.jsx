import React from "react";
import { Outlet } from "react-router-dom";
import st from "./Loyout.module.css";
import { Nav } from "../Nav/Nav";
const Loyout = ({add}) => {
  return (
    <div className={st.loyout}>
      <Nav add={add}/>
      <Outlet />
    </div>
  );
};

export default Loyout;
