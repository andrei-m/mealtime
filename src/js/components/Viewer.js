import React, { Component } from "react";
import ReactDOM from "react-dom";
import Recipe from './Recipe';
import RecipeSelector from './RecipeSelector';
import Timer from './Timer';

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOrdinals: []
    };

    this.selectionHandler = this.selectionHandler.bind(this);
  }

  selectionHandler(ordinal) {
    if (!this.state.selectedOrdinals.includes(ordinal)) {
      var appended = this.state.selectedOrdinals.concat(ordinal);
      this.setState({selectedOrdinals: appended});
    }
  }

  render() {
    var selectedRecipes = [];
    for (const ordinal of this.state.selectedOrdinals) {
      selectedRecipes.push(this.props.recipes[ordinal]);
    }

    return (
      <div>
        <div className="menu">
          <Timer />
          
          <div>
            <RecipeSelector recipes={this.props.recipes} selectionHandler={this.selectionHandler} />
          </div>
        </div>
        <MultiViewer selectedRecipes={selectedRecipes} />
      </div>
    );
  }
}

class MultiViewer extends Component {
  render() {
    var recipes = [];
    for (const r of this.props.selectedRecipes) {
      recipes.push(<Recipe recipe={r} />);
    }

    return (
      <div>
        {recipes}
      </div>
    );
  }
}

export default Viewer;
