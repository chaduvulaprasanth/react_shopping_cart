import React from "react";
import { render } from "react-dom";
import "./assets/stylesheet/style.scss";
import data from "./data.json";
import Products from "./components/Products";
import Filters from "./components/Filters";
import Cart from "./components/Cart";
import Corner from "./components/Corner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      active: "products",
      products: data.products,
      filterData: [],
      sortby: "default"
    };
  }
  handleSortBy = event => {
    this.setState({ sortby: event.target.value });
    this.handleSortView();
  };
  handleProductsView = () => {
    this.setState({
      active: "products"
    });
  };
  handleAddToCart = item => {
    this.setState({ cart: this.state.cart.concat(item) });
  };
  handleViewCart = () => {
    this.setState({ active: "cart" });
  };
  checkout = () => {
    alert("ordered successfully");
  };
  handleFilters = size => {
    var a = this.state.products.filter(item => {
      return item.availableSizes.some(itemSize => itemSize === size);
    });
    this.setState({
      filterData: a,
      active: "filter"
    });
  };
  handleSort = () => {
    return data.products.sort((val1, val2) => {
      return val2.price - val1.price;
    });
  };

  handleSortView = () => {
    switch (this.state.sortby) {
      case "default":
        this.setState({ products: [...data.products] });
        break;

      case "lowestprice":
        this.setState({ products: this.handleSort() });
        break;

      case "highestprice":
        this.setState({ products: this.handleSort().reverse() });
        break;
      default:
        break;
    }
  };

  handleView = () => {
    switch (this.state.active) {
      case "products":
        return (
          <Products
            handleSortBy={this.handleSortBy}
            products={this.state.products}
            handleAddToCart={this.handleAddToCart}
          />
        );
        break;
      case "filter":
        return (
          <Products
            products={this.state.filterData}
            handleAddToCart={this.handleAddToCart}
          />
        );
        break;
      case "cart":
        return (
          <>
            <Cart
              cart={this.state.cart}
              checkout={this.checkout}
              handleProductsView={this.handleProductsView}
            />
            <Products
              products={this.state.products}
              handleAddToCart={this.handleAddToCart}
            />
          </>
        );
        break;
    }
  };

  render() {
    return (
      <>
        <Corner />
        <main>
          <Filters handleFilters={this.handleFilters} />
          {this.handleView()}
        </main>
        <div onClick={this.handleViewCart} className="float-cart">
          <img src="shopping-bag.png" alt="" />
          <p className="float-cart-value">{this.state.cart.length}</p>
        </div>
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
