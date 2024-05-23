import st from "./Card.module.css";
import React from "react";

export const Card = ({ add }) => {
    console.log(add);
  return (
    <div className={st.card}>
      {add.map((el) => {
        return (
          <div className={st.left} key={el.id}>
            <img src={el.image} alt="" />
            <h2>{el.title}</h2>
            <h3>{el.price}</h3>
          </div>
        );
      })}

      <div className={st.right}></div>
    </div>
  );
};
