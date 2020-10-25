import React, { Component } from "react";
import ReactDOM from "react-dom";
import Recipe from './Recipe';
import Timer from './Timer';

class Viewer extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <Timer />
        </div>
        <Recipe recipe={this.props.recipes[0]} />
      </div>
    );
  }
}

export default Viewer;
