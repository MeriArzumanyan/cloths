import { useParams } from "react-router-dom";
import st from "./Product.module.css";
import React from "react";
import { Button } from "../../Components/Button/Button";
import { useState } from "react";
export const Product = (props) => {
  const param = useParams();
  let a = props.data.filter((el) => el.id === +param.id);
  function addItemToCard(item) {
    props.addToCard(item);
    props.increaseCount();
  }
  return (
    <div>
      {a.map((elem) => {
        return (
          <div className={st.allInfo} key={elem.id}>
            <div className={st.forImage}>
              <img src={elem.image} alt="" />
            </div>
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
              <Button onClick={() => addItemToCard(elem)}></Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
