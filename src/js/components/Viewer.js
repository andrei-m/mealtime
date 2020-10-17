import React, { Component } from "react";
import ReactDOM from "react-dom";

class Viewer extends Component {
  render() {
    return (
      <div>Hello {this.props.recipes[0].name}</div>
    );
  }
}

export default Viewer;

