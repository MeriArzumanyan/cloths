import { useLocation } from "react-router-dom";
import st from "./Admin.module.css";
import React from "react";

export const Admin = ({total,positionCount}) => {
  
  const { state } = useLocation();
  return (
    <div className={st.admin}>
      <img
        src="https://yt3.googleusercontent.com/eoufo5OtcF-wnvEMg7c7HP6hEOSR69dqcGLWbZ1UrfhMCTjarZXBvrTtScR78R_hfQ7d9m2iRA=s900-c-k-c0x00ffffff-no-rj"
        alt=""
      />

      <div className={st.forAdmin}>
        <h3>{state.login}</h3>
        <h4>Total income: ${total.toFixed(2)}</h4>
        <h5>Sold quantity: {positionCount} items</h5>
      </div>
    </div>
  );
};
