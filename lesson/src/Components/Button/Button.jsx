import st from "./Button.module.css";
import React from "react";

export const Button = ({ onClick }) => {
  return <button className={st.btn} onClick={onClick}>Add to card</button>;
};
