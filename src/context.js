import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct
  };

  componentDidMount() {
    this.setProducts();
  }

  handleDetail = () => {
    console.log("hello from detail");
  };

  addToCart = id => {
    console.log(`hello from add to cart with id ${id}`);
  };

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
      // console.log(singleItem);
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  render() {
    // console.log(this.state);
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
