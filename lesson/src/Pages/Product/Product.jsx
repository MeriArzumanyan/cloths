import { useParams } from "react-router-dom";
import st from "./Product.module.css";
import React from "react";
import { useState } from "react";
export const Product = (props) => {
  function addItem(item){
    props.addToCard(item)
  }
  const param = useParams();

  let a = props.data.filter((el) => el.id === +param.id);
  // console.log(a);

  return (
    <div>
      {a.map((elem) => {
        return (
          <div className={st.allInfo} key={elem.id}>
            <img src={elem.image} alt="" />
            <div className={st.info}>
              <h2>{elem.title}</h2>
              <h3>$ {elem.price}</h3>
              <h4>Characteristics</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia amet minima a iure et deserunt dolor assumenda veniam
                facere obcaecati.4 Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Neque aliquam magnam nesciunt aliquid quas
                eveniet hic quidem odit deleniti nemo. Praesentium pariatur
                corporis explicabo? Ullam, non nulla rem omnis dolorum aliquid
                doloribus voluptatum laborum, soluta iste est ex praesentium ad.
              </p>
              <button onClick={() => addItem(props.data)}>Add to card</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
