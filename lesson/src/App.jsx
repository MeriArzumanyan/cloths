import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Section } from "./Components/Section/Section";
import Loyout from "./Components/Loyout/Loyout";
import { Home } from "./Pages/Home/Home";
import { Product } from "./Pages/Product/Product";
import { Card } from "./Pages/Card/Card";
function App(props) {
  const [add, setAdd] = useState([]);
  function addToCard(item) {
    let changer = false;
    add.forEach((el) => {
      if (el.id === item.id) {
        changer = true;
       setAdd( add.map((elem) => {
        if (el.id === item.id){
          return {
            ...elem,
            count: ++elem.count,
            initPrice: elem.price * elem.count,
          }}else {
            return elem
          }
        }));
      }});

      if (!changer) {
        setAdd((prev) => {
          return [...prev, item];
        });
      }
    
  }
  
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Section data={props.data} addToCard={addToCard} add={add}/>} />
          <Route path="/products/:id" element={<Product data={props.data}/>} />
          <Route path="/cards" element={<Card data={props.data}/>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
