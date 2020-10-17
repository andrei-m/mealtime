import React, { Component } from "react";
import ReactDOM from "react-dom";

class Viewer extends Component {
  render() {
    return (
      <div>Hello World</div>
    );
  }
}

export default Viewer;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Viewer />, wrapper) : false;
