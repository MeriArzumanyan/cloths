import React from "react";
import st from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { Order } from "../../Components/Order/Order";
export const Card = ({ add, increase, decrease, remove, total, modalOpen,orderFormApp }) => {
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
                  <button onClick={() => remove(el)}>X</button>
                </div>

                <div className={st.details}>
                  <img src={el.image} alt={el.title} />

                  <h2>{el.title}</h2>

                  <div className={st.btn}>
                    <button
                      className={st.minus}
                      onClick={() => decrease(el.id)}
                    >
                      -
                    </button>
                    <span>{el.count}</span>
                    <button className={st.plus} onClick={() => increase(el.id)}>
                      +
                    </button>
                  </div>

                  <p>Unit Price: $ {el.price}</p>
                  <p className={st.total}>Total: $ {el.initPrice}</p>
                </div>
              </div>
            ))}

            <h6>Total price: ${total}</h6>
          </div>
          {
            <div className={st.forInputs}>
              <Order modalOpen={modalOpen} orderFormApp={orderFormApp}/>
            </div>
          }
        </div>
      )}
    </div>
  );
};
