import React from "react";
import data from "../data.json";
import Product from "./Product";

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
      <Product
        products={props.products}
        handleAddToCart={props.handleAddToCart}
      />
    </div>
  );
}
