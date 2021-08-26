import React, {useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButon = props => {

  const [btnisHighLited, setBtnHighLited] = useState(false);
  const cartCtx =  useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnisHighLited ? classes.bump : ""}`;

  useEffect(() => {
    if(items.length === 0) {
      return;
    }
    setBtnHighLited(true);

    const timer = setTimeout(() => {
      setBtnHighLited(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButon;