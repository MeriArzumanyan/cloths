import React from "react";
import st from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { Order } from "../../Components/Order/Order";
export const Card = ({
  add,
  increase,
  decrease,
  remove,
  total,
  modalOpen,
  orderFormApp,
  removePosition,
  increaseCount,
  setPositionCount,
  positionCount,
}) => {
  function forDecreasing(id) {
    decrease(id);
    removePosition();
  }
  function forIncreasing(id) {
    increase(id);
    increaseCount();
  }
  function handleRemove(elem) {
    setPositionCount(positionCount - elem.count);
    remove(elem);
  }
  return (
    <div className={st.card}>
      {add.length === 0 ? (
        <h4>The basket is empty. Please choose at least one item</h4>
      ) : (
        <div className={st.forOrder}>
          <div className={st.forItems}>
            {add.map((el) => (
              <div className={st.item} key={el.id}>
                <div className={st.forRemoving}>
                  <button onClick={() => handleRemove(el)}>X</button>
                </div>
                <div className={st.details}>
                  <img src={el.image} alt={el.title} />
                  <h2>{el.title}</h2>
                  <div className={st.btn}>
                    <button
                      className={st.minus}
                      onClick={() => el.count > 1 && forDecreasing(el.id)}
                    >
                      -
                    </button>
                    <span>{el.count}</span>
                    <button
                      className={st.plus}
                      onClick={() => forIncreasing(el.id)}
                    >
                      +
                    </button>
                  </div>

                  <p>Unit Price: $ {el.price}</p>
                  <p className={st.total}>Total: $ {el.initPrice.toFixed(2)}</p>
                </div>
              </div>
            ))}
            <h6>Total price: ${total.toFixed(2)}</h6>
          </div>
          {
            <div className={st.forInputs}>
              <Order modalOpen={modalOpen} orderFormApp={orderFormApp} />
            </div>
          }
        </div>
      )}
    </div>
  );
};
