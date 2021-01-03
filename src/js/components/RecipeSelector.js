import React, { Component } from "react";
import ReactDOM from "react-dom";

class RecipeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOrdinal: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({selectedOrdinal: parseInt(event.target.value)});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.selectionHandler(this.state.selectedOrdinal);
  }

  render() {
    var options = [];
    for (var i = 0; i < this.props.recipes.length; i++) {
      options.push(<option value={i}>{this.props.recipes[i].name}</option>);
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange}>
          {options}
        </select>
        <input className="add" type="submit" value="+Add" />
      </form>
    );
  }
}

export default RecipeSelector;
