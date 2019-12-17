import React from "react";
import { render } from "react-dom";

import "./assets/stylesheet/style.scss";
import data from "./data.json";
import Products from "./components/Products";
import Filters from "./components/Filters";
import Cart from "./components/Cart";
import Corner from "./components/Corner";
import TotalCartQuantity from "./components/TotalCartQuantity";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      active: "products",
      products: data.products,
      filterData: [],
      sortby: "default",
      test: null,
      isOpen: false
    };
  }
  handleSortBy = event => {
    this.setState({ sortby: event.target.value });
    this.handleSortView();
  };
  handleProductsView = () => {
    this.setState({
      active: "products",
      isOpen: false
    });
  };
  handleAddToCart = item => {
    const a = this.state.cart.find(product => product.id == item.id);
    if (a) {
      this.state.cart.forEach(product => {
        if (product.id === item.id) {
          product.quantity += 1;
          this.setState({
            test: "state updated"
          });
        }
      });
    } else {
      this.setState({
        cart: this.state.cart.concat({ ...item, quantity: 1 })
      });
    }
  };
  handleCartInc = item => {
    const inc = this.state.cart.find(product => product.id == item.id);
    if (inc) {
      this.state.cart.forEach(product => {
        if (product.id === item.id) {
          product.quantity += 1;
          this.setState({
            test: "state updated"
          });
        }
      });
    }
  };
  handleCartDec = item => {
    const inc = this.state.cart.find(product => product.id == item.id);
    if (inc) {
      this.state.cart.forEach(product => {
        if (product.id === item.id) {
          if (product.quantity > 1) {
            product.quantity -= 1;
            this.setState({
              test: "state updated"
            });
          }
        }
      });
    }
  };
  handleRemove = item => {
    this.setState({
      cart: this.state.cart.filter(product => product.id !== item.id)
    });
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
  changeOpen = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  handleSortView = () => {
    switch (this.state.sortby) {
      case "default":
        this.handleProductsView();
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
          <>
            <Products
              products={this.state.filterData}
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

        <TotalCartQuantity
          handleClick={this.changeOpen}
          cart={this.state.cart}
        />
        {this.state.isOpen ? (
          <Cart
            cart={this.state.cart}
            checkout={this.checkout}
            handleProductsView={this.handleProductsView}
            handleCartInc={this.handleCartInc}
            handleCartDec={this.handleCartDec}
            handleRemove={this.handleRemove}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
