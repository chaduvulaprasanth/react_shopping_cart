import React from "react";

export default function TotalCartQuantity(props) {
  if (props.cart.length < 1) {
    return (
      <div>
        <div onClick={props.handleClick} className="float-cart">
          <img src="/static/bag-icon.png" alt="" />
          <span className="float-cart-value">0</span>
        </div>
      </div>
    );
  } else {
    var totalCartQuantity = props.cart
      .map(e => e.quantity)
      .reduce((acc, quantity) => acc + quantity);
  }
  return (
    <div onClick={props.handleClick} className="float-cart">
      <img src="/static/bag-icon.png" alt="" />
      <span className="float-cart-value">{totalCartQuantity}</span>
    </div>
  );
}
