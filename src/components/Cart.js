import React from "react";

import Total from "./Total";
import CartCard from "./CartCard";
import TotalCartQuantity from "./TotalCartQuantity";

export default function Cart(props) {
  return (
    <div className="float-cart float-cart-open">
      <div onClick={props.handleClick} class="float-cart-close-btn">
        X
      </div>

      <div className="float-cart-content">
        <div className="float-cart-header">
          <TotalCartQuantity cart={props.cart} />
        </div>
        <div class="float-cart-shelf-container">
          <CartCard
            cart={props.cart}
            handleRemove={props.handleRemove}
            handleCartInc={props.handleCartInc}
            handleCartDec={props.handleCartDec}
          />
          {props.cart.length ? (
            <div class="float-cart-footer">
              <Total cart={props.cart} />
              <div className="buy-btn" onClick={props.checkout}>
                CHECKOUT
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
