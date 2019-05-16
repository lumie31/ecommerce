import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="card-btn"
                  onClick={() => {
                    value.addToCart(id);
                  }}
                  disabled={inCart ? true : false}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0">in cart</p>
                  ) : (
                    <i className="fas fa-shopping-cart" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-palevioletred font-italic mb-0">
              £<span className="mr-1">{price}</span>.00
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border-radius: 15px;
    transition: all 1s linear;
  }
  .card-footer {
    border-radius: 0px 0px 15px 15px;
  }
  &:hover {
    .card {
      border-color: 1.5px solid black;
      box-shadow: 2px 2px 5px 0px palevioletred;
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s ease-in-out;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .card-btn {
    top: 0px;
    right: 0px;
    position: absolute;
    background: palevioletred;
    color: white;
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 0 0.875rem 0 0;
    cursor: pointer;
    transform: translate(100%, 100%);
    transition: all 0.5s ease-in-out;
  }
  .img-container:hover .card-btn {
    transform: translate(0, 0);
  }
`;
