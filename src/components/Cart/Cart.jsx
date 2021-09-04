import React, { Fragment, useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context"; 
import CartItem from "./CartItem";
import Checkout from "./Checkout";

import classes from "./Cart.module.css";

const Cart = props => {
  const [isCheckout, setIsChekcout] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const carItemAddHandler = id => {
    cartCtx.addItem(id)
  };

  const orderHandler = () => {
    setIsChekcout(true)
  };

  const sumbitOrderHandler = async (userData) => {
    setIsSubmiting(true);
    await fetch("https://react-http-c9b42-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItem: cartCtx.items
      })
    });
    setIsSubmiting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const moadlActions = <div className={classes.actions}>
                      <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                      {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
                    </div>

  const cartItems = <ul className={classes["cart-items"]}>{cartCtx.items.map((item )=> <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={carItemAddHandler.bind(null, item)} />)}</ul>;

  const cartModalContent = <Fragment>
    {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      { isCheckout && <Checkout onConfirm={sumbitOrderHandler} onCancel={props.onClose} />}
      {!isCheckout && moadlActions }
  </Fragment> 
  
  const isSubmitiingMOdalContent = <p>Sending order data</p>;
  const didSubmitModalContent = <Fragment>
      <p>Successfully sent order!</p>
      <button className={classes.button} onClick={props.onClose}>Close</button>
    </Fragment>

  return (
    <Modal onClose={props.onClose}>
      {!isSubmiting && !didSubmit && cartModalContent}
      {isSubmiting &&  isSubmitiingMOdalContent}
      {!isSubmiting && didSubmit && didSubmitModalContent}
    </Modal> 
  );
};

export default Cart;