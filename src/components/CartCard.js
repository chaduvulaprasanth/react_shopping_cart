import React from "react";

export default function CartCard(props) {
  return (
    <>
      {props.cart.map(item => (
        <>
          <div className="product-cart">
            <p className="close-btn" onClick={() => props.handleRemove(item)}>
              x
            </p>
            <div className="cart-product-card">
              <div className="cart-product-card-left">
                <div className="cart-product-img">
                  <img src={`/static/products/${item.sku}_2.jpg`} alt="" />
                </div>
                <div>
                  <p className="cart-product-title">{item.title}</p>
                  <p className="cart-product-style">{item.style}</p>
                  <p className="cart-product-style">
                    quantity: {item.quantity}
                  </p>
                </div>
              </div>
              <div>
                <p className="cart-product-price">
                  {item.currencyFormat}
                  {(item.price * item.quantity).toFixed(2)}
                </p>
                <div className="counter">
                  <p
                    className="counterdec"
                    onClick={() => props.handleCartDec(item)}
                  >
                    -
                  </p>
                  <p
                    className="counterinc"
                    onClick={() => props.handleCartInc(item)}
                  >
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
