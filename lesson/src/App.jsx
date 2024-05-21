import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Section } from "./Components/Section/Section";
import Loyout from "./Components/Loyout/Loyout";
import { Home } from "./Pages/Home/Home";
import { Product } from "./Pages/Product/Product";
function App(props) {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Section data={props.data} />} />
          <Route path="/products/:id" element={<Product data={props.data}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
