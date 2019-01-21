import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">First column</div>
            <div className="col">second column</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
