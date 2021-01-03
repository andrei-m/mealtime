import React, { Component } from "react";
import ReactDOM from "react-dom";

import TimerConfig from "./TimerConfig";

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(event) {
    this.props.closeHandler();
  }

  render() {
    const r = this.props.recipe;
    const style = {width: this.props.width + "%"};

    return (
      <div style={style} className="recipeContainer">
        <div>
          <h2>{r.name}</h2>
          <input className="close" type="button" value="x" onClick={this.handleClose} />
        </div>
        <Steps prep={r.prep} cook={r.cook} />
      </div>
    );
  }
}

class Steps extends Component {
  render() {
    const allSteps = this.props.prep.concat(this.props.cook);
    var stepItems = [];
    for (const step of allSteps) {
      stepItems.push(<Step name={step.description} duration={step.duration} />);
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
      const style = {};
      if (this.props.duration) {
        style["padding-bottom"] = this.props.duration * TimerConfig.pxPerSecond + "px";
      }

      return (
        <li style={style}>
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
