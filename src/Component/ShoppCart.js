import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Component

import Cart from "./shared/Cart";

//Context
import { CartContext } from "../context/CartContextProvider";

//Styles

import styles from "./ShoppCart.module.css";
const ShoppCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      <div>
        {state.itemCunter > 0 && (
          <div className={styles.payments}>
            <p>
              <span>Total Items:</span>
              {state.itemCunter}
            </p>
            <p>
              <span>Total Payments:</span>
              {state.total}
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
              <button className={styles.checkout} onClick={() => dispatch({ type: "CHECKOUT" })}>
                Check Out
              </button>
            </div>
          </div>
        )}

        {/* State */}

        {!state.checkOut && state.itemCunter === 0 && (
          <div className={styles.completa}>
            <h3>want To Buy ?</h3>
            <Link to="/products">Go to Shop</Link>
          </div>
        )}

        {state.checkOut && (
          <div className={styles.completa}>
            <h3>Check Out Successfully</h3>
            <Link to="/products">Buy More</Link>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default ShoppCart;
