import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { MyButton } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark bg-dark">
        {/* 
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk
      */}
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-brand" />
        </Link>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart">
          <MyButton>
            <span className="mr-2">
              <i className="fas fa-shopping-cart" />
            </span>
            My cart
          </MyButton>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  .nav-link {
    color: palevioletred !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
