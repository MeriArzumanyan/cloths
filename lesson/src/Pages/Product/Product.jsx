import { useParams } from "react-router-dom";
import st from "./Product.module.css";
import React from "react";
import { Button } from "../../Components/Button/Button";
import { useState } from "react";
import { useEffect } from "react";
export const Product = (props) => {
  const {id} = useParams();
  const [uniqueData, setUniqueData] = useState([]);
    const base = "https://fakestoreapi.com/products";
  
    useEffect(() => {
      fetch(`${base}/${id}`)
        .then(response => response.json())
        .then(result => setUniqueData(result));
    }, []);
    
  // console.log(param);
  // let a = props.data.filter((el) => el.id === +param.id);
  function addItemToCard(item) {
    props.addToCard(item);
    props.increaseCount();
   
  }
  return (
<div>
      {uniqueData && (
        <div className={st.allInfo} key={uniqueData.id}>
          <div className={st.forImage}>
            <img src={uniqueData.image} alt="" />
          </div>
          <div className={st.info}>
            <h2>{uniqueData.title}</h2>
            <h3>$ {uniqueData.price}</h3>
            <h4>Characteristics</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              amet minima a iure et deserunt dolor assumenda veniam facere
              obcaecati.4 Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Neque aliquam magnam nesciunt aliquid quas eveniet hic
              quidem odit deleniti nemo. Praesentium pariatur corporis
              explicabo? Ullam, non nulla rem omnis dolorum aliquid doloribus
              voluptatum laborum, soluta iste est ex praesentium ad.
            </p>
            <Button onClick={() => addItemToCard(uniqueData)}>Add to Cart</Button>
          </div>
        </div>
      )}
    </div>
  );
};
