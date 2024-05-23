import st from "./Nav.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";


export const Nav = () => {
  return (
    <nav>
      <div className={st.nav}>
        <img
          src="https://sun6-23.userapi.com/s/v1/ig1/5k7It3m807ufxL8wimSDnI7i3aXJSv37GgfoXYZ5RNYcc9qcYlNJcNValy2ffGi-H76xyPVQ.jpg?size=1587x1587&quality=96&crop=5,0,1587,1587&ava=1"
          alt=""
        />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cards">
        <FaCartShopping />

        </NavLink>

        <NavLink to="/products">Products</NavLink>
      </div>
    </nav>
  );
};
