import React, { Component } from "react";
import ReactDOM from "react-dom";
import Recipe from './Recipe';

class Viewer extends Component {
  render() {
    return (
      <div>
        <Recipe recipe={this.props.recipes[0]} />
      </div>
    );
  }
}

export default Viewer;
