import { useState,useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Section } from "./Components/Section/Section";
import Loyout from "./Components/Loyout/Loyout";
import { Home } from "./Pages/Home/Home";
import { Product } from "./Pages/Product/Product";
import { Card } from "./Pages/Card/Card";
import { Modal } from "./Components/Modal/Modal";
import { Registration } from "./Pages/Registration/Registration";
import { LogIn } from "./Pages/LogIn/LogIn";
import { Profile } from "./Pages/Profile/Profile";
import { Admin } from "./Pages/Admin/Admin";
function App() {
 
    const [data, setData] = useState([]);
    const base = "https://fakestoreapi.com/products";
  
    useEffect(() => {
      fetch(base)
        .then(response => response.json())
        .then(result => setData(result));
    }, []);
   function clone() {
      setData((prev) => {
        return prev.map((item) => ({
          ...item,
          count: 1,
          initPrice: item.price,
        }));
      });
    }
    
 
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
    // removePosition();
  }

  function removePosition() {
    setPositionCount(positionCount - 1);
  }
  //////////////new user//////
  function createNewUser(newUser) {
    setUsers((prev) => {
      return [...prev, newUser];
    });
  }
  ////////////for setting counter//////////////
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ashot",
      login: "Ashot",
      password: "Ab123456$",
      role: "admin",
      gender:"male"
    },
    { id: 2, name: "Ani", login: "Ani", password: "Ab123456$", role: "user" ,gender:"female"},
    {
      id: 3,
      name: "Davit",
      login: "Davit",
      password: "Ab123456$",
      role: "user",
      gender:"male"
    },
    { id: 4, name: "Nare", login: "Nare", password: "Ab123456$", role: "user",gender:"female" },
  ]);
  
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
  function modalClose() {
    setOpen(false);
  }

  //////

  const [orderData, setOrderData] = useState([]);
  ////////
  function orderFormApp(infoData) {
    setOrderData((prev) => {
      return [{ ...infoData }];
    });
  }
  ////
  const [positionCount, setPositionCount] = useState(0);
  function increaseCount() {
    setPositionCount(positionCount + 1);
  }
  return (
    <div className="container">
      {open && (
        <Modal>
          <div className="modal">
            <div className="modalContent">
              {orderData.map((el) => {
                
                return (
                  <div className="forOrderData">
                    <h1>Name: {el.name}</h1>
                    <h2>Total: ${+total.toFixed(2)}</h2>
                  </div>
                );
              })}
              <button onClick={modalClose}>X</button>
            </div>
          </div>
        </Modal>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Loyout
              add={add}
              positionCount={positionCount}
              increaseCount={increaseCount}
            />
          }
        >
          <Route index element={<Home />} />
          <Route
            path="/products"
            element={
              <Section
                data={data}
                addToCard={addToCard}
                add={add}
                increaseCount={increaseCount}
                positionCount={positionCount}
             
              />
            }
          />
          <Route
            path="/products/:id"
            element={
              <Product
                data={data}
                add={add}
                addToCard={addToCard}
                increaseCount={increaseCount}
                positionCount={positionCount}
              />
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
                removePosition={removePosition}
                increaseCount={increaseCount}
                positionCount={positionCount}
                setPositionCount={setPositionCount}
              />
            }
          />
          <Route path="/registration" element={<Registration createNewUser={createNewUser}/>} />
          <Route path="/login" element={<LogIn users={users} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/admin" element={<Admin  total={total} positionCount={positionCount}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
