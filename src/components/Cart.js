import React from "react";

export default function Cart(props) {
  function Total(props) {
    if (props.cart.length) {
      var total = props.cart
        .map(e => e.price)
        .reduce((acc, price) => acc + price);
      return (
        <div class="sub">
          <div class="subtotal">SUBTOTAL</div>
          <p class="sub-price-val">{`$ ${String(total).slice(0, 6)}`}</p>
        </div>
      );
    }
  }

  return (
    <div className="float-cart float-cart-open">
      <div onClick={props.handleProductsView} class="float-cart-close-btn">
        X
      </div>
      <div className="float-cart-content">
        <div className="float-cart-header">
          <img
            className="float-cart-header-img"
            src="shopping-bag2.png"
            alt=""
          />
          <p className="float-cart-value">{props.cart.length}</p>
        </div>
        <div class="float-cart-shelf-container">
          {props.cart.map(item => (
            <>
              <div className="cart-product-card">
                <div className="cart-product-card-left">
                  <div className="cart-product-img">
                    <img src={`/static/products/${item.sku}_2.jpg`} alt="" />
                  </div>
                  <div>
                    <p className="cart-product-title">{item.title}</p>
                    <p className="cart-product-style">{item.style}</p>
                  </div>
                </div>
                <p className="cart-product-price">
                  {item.currencyFormat}
                  {item.price}
                </p>
              </div>
            </>
          ))}
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
