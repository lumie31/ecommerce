import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { MyButton } from "./Button";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          let { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-4"
                    >
                      <h5>Item added to the cart</h5>
                      <img src={img} alt="product" className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">
                        Price: &pound;<span className="mr-1">{price}</span>.00
                      </h5>
                      <Link to="/">
                        <MyButton onClick={() => closeModal()}>
                          continue shopping
                        </MyButton>
                      </Link>
                      <Link to="/cart">
                        <MyButton cart onClick={() => closeModal()}>
                          go to cart
                        </MyButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
    border-radius: 15px;
  }
  #modal:hover {
    border-color: 1.5px solid black;
    box-shadow: 2px 2px 5px 0px palevioletred;
  }
`;
