import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Section } from "./Components/Section/Section";
import Loyout from "./Components/Loyout/Loyout";
import { Home } from "./Pages/Home/Home";
import { Product } from "./Pages/Product/Product";
import { Card } from "./Pages/Card/Card";
import { createPortal } from "react-dom";
function App(props) {
  const [add, setAdd] = useState([]);
  ///////////for adding items to cart//////////////
  function addToCard(item) {
    let changer = false;
    add.forEach((el) => {
      if (el.id === item.id) {
        changer = true;
        setAdd(
          add.map((el) => {
            if (el.id === item.id) {
              return {
                ...el,
                count: ++el.count,
                initPrice: el.price * el.count,
              };
            } else {
              return el;
            }
          })
        );
      }
    });

    if (!changer) {
      setAdd((prev) => {
        return [...prev, item];
      });
    }
  }
  /////////////remove items///////////
  function remove(item) {
    setAdd((prev) => {
      return prev.filter((el) => {
        return item.id !== el.id;
      });
    });
  }
  ////////////for setting counter//////////////

  function changeCount(id, newCount) {
    setAdd((prev) =>
      prev.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            count: newCount,
            initPrice: newCount * el.price,
          };
        }
        return el;
      })
    );
  }

  function increase(id) {
    setAdd((prev) =>
      prev.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            count: el.count + 1,
            initPrice: (el.count + 1) * el.price,
          };
        }
        return el;
      })
    );
  }

  function decrease(id) {
    setAdd((prev) =>
      prev.map((el) => {
        if (el.id === id && el.count > 1) {
          return {
            ...el,
            count: el.count - 1,
            initPrice: (el.count - 1) * el.price,
          };
        }
        return el;
      })
    );
  }
  ////////////total price ///////////
  let total = add.reduce((acum, el) => {
    return el.initPrice + acum;
  }, 0);

  //////////////////pop up///////////////
  const [open, setOpen] = useState(false);
  function modalOpen() {
    setOpen(true);
  }
  function modalClose(){
    setOpen(false)
  }

  //////
  function Modal({ children }) {
    return (
      <div>{createPortal(children, document.getElementById("portal"))}</div>
    );
  }

  const [orderData,setOrderData]=useState([])
  ////////
  function orderFormApp(infoData) {
    setOrderData((prev)=>{
      return [{...infoData}]
    })
  }
  ////
  

  return (
    <div className="container">
      {open && (
        <Modal>
          <div className="modal">
            <div className="modalContent">
              {
                orderData.map((el)=>{
                  return <div className="forOrderData">
                    <h1>{el.name}</h1>
                    <h2>{total}</h2>
                  </div>
                })
              }
              <button onClick={modalClose}>X</button>
            </div>
            
          </div>
        </Modal>
      )}

      <Routes>
        <Route path="/" element={<Loyout add={add} />}>
          <Route index element={<Home />} />
          <Route
            path="/products"
            element={
              <Section data={props.data} addToCard={addToCard} add={add} />
            }
          />
          <Route
            path="/products/:id"
            element={
              <Product data={props.data} add={add} addToCard={addToCard} />
            }
          />
          <Route
            path="/cards"
            element={
              <Card
                add={add}
                increase={increase}
                decrease={decrease}
                remove={remove}
                total={total}
                modalOpen={modalOpen}
                orderFormApp={orderFormApp}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
