import React from "react";

export default function Product(props) {
  return (
    <>
      {props.products.map(product => (
        <div
          onClick={() => props.handleAddToCart(product)}
          className="product-card"
        >
          {product.isFreeShipping ? (
            <div className="free-shipping">Free shipping</div>
          ) : (
            ""
          )}

          <div className="product-img">
            <img src={`/static/products/${product.sku}_1.jpg`} alt="" />
          </div>
          <p className="product-title">{product.title}</p>
          <div className="product-price">
            <small className="product-price-format">
              {product.currencyFormat}
            </small>
            <p className="product-price-rate">{product.price}</p>
          </div>
          <p className="product-price-installments">
            or {product.installments}X
            {String(product.price / product.installments).slice(0, 4)}
          </p>
          <div className="buy-btn">Add to cart</div>
        </div>
      ))}
    </>
  );
}
