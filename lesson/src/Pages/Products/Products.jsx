import st from "./Products.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../Components/Button/Button";
import { Product } from "../Product/Product";
export const Products = (props) => {
  const [hide, setHide] = useState(30);
  /////////add to card
  function addItem(item) {
    props.addToCard(item);
    props.increaseCount();
   
  }
  return (
    <div className={st.products} key={props.data.id}>
      <div className={st.prodCard}>
        <NavLink to={`/products/${props.data.id} `}>
          <img src={props.data.image} alt="" />
        </NavLink>

        <h2>
          {props.data.title.length <= hide
            ? props.data.title
            : `${props.data.title.slice(0, hide)}...`}
        </h2>
        <h3>$ {props.data.price}</h3>
        {/* <button onClick={() => addItem(props.data) }>Add to card</button> */}
        <Button onClick={() => addItem(props.data)}  >Add to cart</Button>
      </div>
    </div>
  );
};
