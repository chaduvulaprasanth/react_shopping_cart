import React from "react";
import data from "../data.json";

export default function Products(props) {
  return (
    <div className="products">
      <div className="products-header">
        <small>{props.products.length} Product(s) found</small>
        <div className="sort">
          Order by
          <select onChange={props.handleSortBy}>
            <option value="default">Select</option>
            <option value="lowestprice">Lowest to highest</option>
            <option value="highestprice">Highest to lowest</option>
          </select>
        </div>
      </div>
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
    </div>
  );
}
