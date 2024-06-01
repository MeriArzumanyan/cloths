import st from "./Nav.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";


// const user = "Ashot";
export const Nav = ({ add, positionCount }) => {
  return (
    <nav>
      <div className={st.nav}>
        <NavLink to="/">
          <img
            src="https://sun6-23.userapi.com/s/v1/ig1/5k7It3m807ufxL8wimSDnI7i3aXJSv37GgfoXYZ5RNYcc9qcYlNJcNValy2ffGi-H76xyPVQ.jpg?size=1587x1587&quality=96&crop=5,0,1587,1587&ava=1"
            alt=""
          />
        </NavLink>
        <div className={st.rightPart}>
          <NavLink to="/products">Products</NavLink>

          {add.length ? (
            <NavLink to="/cards">
              <div className={st.navPosition}>
                <FaCircle className={st.position} />
                <span>{positionCount}</span>
                <FaCartShopping />
              </div>
            </NavLink>
          ) : (
            <FaCartShopping />
          )}

          <NavLink to={"./login"}>
          <FaUser/>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
