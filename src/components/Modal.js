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
          console.log(value);
        }}
      </ProductConsumer>
    );
  }
}
