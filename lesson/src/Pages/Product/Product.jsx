import { useParams } from "react-router-dom";
import st from "./Product.module.css";
import React from "react";

export const Product = (props) => {
  const param = useParams();
  
  {
    props.data.filter((el) => 
    el.id === +param.id,

    );
  }
  return (
    <div>
      {props.data.map((elem) => {
        return (
          <div key={elem.id}>
            <img src={elem.image} alt="" />
            <h2>{elem.title}</h2>
            <h3>$ {elem.price}</h3>
            <button>Add to card</button>
          </div>
        );
      })}
    </div>
  );
};
