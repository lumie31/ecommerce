import React, { Component } from "react";
// import Product from "../Product";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">products</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">name of product</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">price (&pound;)</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">quantity</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">remove</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">total (&pound;)</p>
          </div>
        </div>
      </div>
    );
  }
}
