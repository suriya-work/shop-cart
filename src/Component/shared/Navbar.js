import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { CartContext } from "../../context/CartContextProvider";

// Icons
import shopIcon from "../../assest/icons8-add-shopping-cart-48.png";

//Style
import styles from "../Navbar.module.css";

const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">
          Products
        </Link>
        <div className={styles.iconContainer}>
          <Link to="/Cart">
            <img src={shopIcon} alt="shop" />
          </Link>
          <span>{state.itemCunter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
