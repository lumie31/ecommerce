import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { MyButton } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {val => {
          const {
            id,
            title,
            img,
            info,
            inCart,
            price,
            company
          } = val.detailProduct;
          return (
            <div className="container py-2">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-4">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img className="img-fluid" src={img} alt="Product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4>
                    <strong>
                      Price: <span>£</span>
                      {price}.00
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Some info about product:{" "}
                  </p>
                  <p className="text-muted text-justify lead">{info}</p>
                  <div>
                    <Link to="/">
                      <MyButton className="m-0">Back to Products</MyButton>
                    </Link>
                    <MyButton
                      className="ml-3"
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        val.addToCart(id);
                      }}
                    >
                      {inCart ? "In cart" : "add to cart"}
                    </MyButton>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
