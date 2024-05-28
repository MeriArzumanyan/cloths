import st from "./Home.module.css";
import React from "react";
import { Slide } from "../../Components/Slider/Slider";

export const Home = () => {
  return (
    <div className={st.main}>
      <div className={st.home}>
        <h1>Welcome to our website</h1>
      </div>
      <Slide />
    </div>
  );
};
