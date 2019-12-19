import React from "react";

export default function Total(props) {
  if (props.cart.length) {
    var total = props.cart
      .map(e => e.price * e.quantity)
      .reduce((acc, price) => acc + price);
    return (
      <div class="sub">
        <div class="subtotal">SUBTOTAL</div>
        <p class="sub-price-val">{`$ ${total.toFixed(2)}`}</p>
      </div>
    );
  }
}
