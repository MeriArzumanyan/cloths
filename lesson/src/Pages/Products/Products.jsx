import st from "./Products.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
export const Products = (props) => {
  //   console.log(props);
  return (
    <div className={st.products} key={props.data.id}>
      <div className={st.prodCard}>
        <NavLink to={`/porduct/${props.data.id}`}>
        <img src={props.data.image} alt="" />

        </NavLink>
        <h2>{props.data.title}</h2>
        <h3>$ {props.data.price}</h3>
        <button>Add to card</button>
      </div>
    </div>
  );
};
