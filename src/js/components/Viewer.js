import React, { Component } from "react";
import ReactDOM from "react-dom";
import Recipe from './Recipe';
import RecipeSelector from './RecipeSelector';
import Timer from './Timer';

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenOrdinals: []
    };

    this.selectionHandler = this.selectionHandler.bind(this);
  }

  selectionHandler(ordinal) {
    if (!this.state.chosenOrdinals.includes(ordinal)) {
      var appended = this.state.chosenOrdinals.concat(ordinal);
      this.setState({chosenOrdinals: appended});
    }
  }

  render() {
    return (
      <div>
        <div className="menu">
          <Timer />
          
          <div>
            <RecipeSelector recipes={this.props.recipes} selectionHandler={this.selectionHandler} />
          </div>
        </div>
        <Recipe recipe={this.props.recipes[0]} />
      </div>
    );
  }
}

export default Viewer;
