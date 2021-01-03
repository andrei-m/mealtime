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
    this.closeHandler = this.closeHandler.bind(this);
  }

  selectionHandler(ordinal) {
    if (!this.state.selectedOrdinals.includes(ordinal)) {
      var appended = this.state.selectedOrdinals.concat(ordinal);
      this.setState({selectedOrdinals: appended});
    }
  }

  closeHandler(ordinal) {
    var removed = this.state.selectedOrdinals.filter(item => item !== ordinal);
    this.setState({selectedOrdinals: removed});
  }

  render() {
    var selectedRecipes = [];
    for (const ordinal of this.state.selectedOrdinals) {
      selectedRecipes.push({recipe: this.props.recipes[ordinal], ordinal: ordinal});
    }

    return (
      <div>
        <div className="menu">
          <Timer />
          
          <div>
            <RecipeSelector recipes={this.props.recipes} selectionHandler={this.selectionHandler} />
          </div>
        </div>
        <MultiViewer selectedRecipes={selectedRecipes} closeHandler={this.closeHandler} />
      </div>
    );
  }
}

class MultiViewer extends Component {
  render() {
    var recipes = [];
    const width = this.props.selectedRecipes.length > 0 ? Math.round(100 / this.props.selectedRecipes.length) : 100;

    for (const r of this.props.selectedRecipes) {
      const closeHandler = function() {
        this.props.closeHandler(r.ordinal);
      }.bind(this);

      recipes.push(<Recipe recipe={r.recipe} width={width} closeHandler={closeHandler} />);
    }

    return (
      <div>
        {recipes}
      </div>
    );
  }
}

export default Viewer;
