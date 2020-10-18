import React, { Component } from "react";
import ReactDOM from "react-dom";

class Recipe extends Component {
  render() {
    const r = this.props.recipe;
    return (
      <div>
        <h2>{r.name}</h2>
        <Steps prep={r.prep} cook={r.cook} />
      </div>
    );
  }
}

class Steps extends Component {
  render() {
    const allSteps = this.props.prep.concat(this.props.cook);
    var stepItems = [];
    for (var i = 0; i < allSteps.length; i++) {
      stepItems.push(<Step name={allSteps[i]} />);
    }
    return (
      <ol className="recipeSteps">{stepItems}</ol>
    );
  }
}

class Step extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: false
      };

      this.handleCheckChange = this.handleCheckChange.bind(this);
    }

    handleCheckChange(event) {
      this.setState({
        isChecked: event.target.checked
      });
    }

    render() {
      return (
        <li>
          <label className={this.state.isChecked ? "checked" : ""}>
            <input
              type="checkbox"
              checked={this.state.isChecked}
              onChange={this.handleCheckChange}
             />
            {this.props.name}
          </label>
        </li>
      );
    }
}

export default Recipe;
