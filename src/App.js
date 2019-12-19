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
      products: data.products,
      filterData: [],
      sortby: "default",
      test: null,
      isOpen: false
    };
  }

  // add to cart
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

  // to view the cart
  changeOpen = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  // increment cart
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

  // decrement cart
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

  // remove item from cart
  handleRemove = item => {
    this.setState({
      cart: this.state.cart.filter(product => product.id !== item.id)
    });
  };

  // checkout message
  checkout = () => {
    alert("ordered successfully");
  };

  // handle filter sizes
  handleFilters = size => {
    console.log(size);
    if (!this.state.filterData.includes(size)) {
      this.setState({ filterData: [...this.state.filterData, size] });
    } else {
      this.setState({
        filterData: this.state.filterData.filter(itemsize => itemsize !== size)
      });
    }
  };

  filteredData = () => {
    let data = this.state.products;
    return data.map(item => {
      return item.availableSizes.filter(size =>
        this.state.filterData.includes(size)
      ).length
        ? item
        : {};
    });
  };

  // handle sort
  handleSortBy = event => {
    this.setState({ sortby: event.target.value });
    this.handleSortView();
  };
  handleSort = () => {
    return [...this.state.products].sort((val1, val2) => {
      return val2.price - val1.price;
    });
  };
  handleSortView = () => {
    switch (this.state.sortby) {
      case "default":
        this.setState({ active: "products" });
        break;

      case "lowestprice":
        this.setState({ products: this.handleSort() });
        break;

      case "highestprice":
        this.setState({ products: this.handleSort().reverse() });
        break;
      default:
        this.setState({ products: "products" });
        break;
    }
  };

  render() {
    let dataToRender = this.state.filterData.length
      ? this.filteredData().filter(item => Object.entries(item).length !== 0)
      : this.state.products;
    return (
      <>
        <Corner />
        <main>
          <Filters handleFilters={this.handleFilters} />
          <Products
            products={dataToRender}
            handleSortBy={this.handleSortBy}
            handleAddToCart={this.handleAddToCart}
          />
        </main>

        <TotalCartQuantity
          handleClick={this.changeOpen}
          cart={this.state.cart}
        />
        {this.state.isOpen ? (
          <Cart
            cart={this.state.cart}
            checkout={this.checkout}
            handleClick={this.changeOpen}
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
