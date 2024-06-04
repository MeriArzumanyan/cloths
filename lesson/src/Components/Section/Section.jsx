import st from "./Section.module.css";
import React from "react";
import { Products } from "../../Pages/Products/Products";
export const Section = (props) => {
  return (
    <section>
      <div className={st.section}>
        {props.data.map((el) => {
          return <Products data={el} key={el.id} addToCard={props.addToCard} increaseCount={props.increaseCount} positionCount={props.positionCount} />;
        })}
       </div>
    </section>
  );
};
