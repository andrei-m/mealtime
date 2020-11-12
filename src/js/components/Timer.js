import React, { Component } from "react";
import ReactDOM from "react-dom";

class Timer extends Component {
  constructor(props) {
    props["interval"] = 100;
    super(props);
    this.state = {
      time: 0,
      enabled: false
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.toggle = this.toggle.bind(this);
    this.tick = this.tick.bind(this);
  }

  toggle() {
    this.state.enabled ? this.pause() : this.start();
  }

  start() {
    this.setState({enabled: true});
    this.timer = setInterval(this.tick, this.props.interval);
  }

  pause() {
    this.setState({enabled: false});
    clearInterval(this.timer);
  }

  stop() {
    this.setState({enabled: false, time: 0});
    clearInterval(this.timer);
  }

  tick() {
    this.setState({time: this.state.time + this.props.interval});
  }

  render() {
    const enabled = this.state.enabled;
    return (
      <div>
        <ProgressionBar
        time={this.state.time}
        enabled={this.state.time > 0}
        offset={50}
        />

        <div className="timerContainer">
          <div className="timer">
            <button onClick={this.toggle}>{enabled ? "⏸️" : "▶️"}</button>
            <button onClick={this.stop}>⏹️</button>
          </div>
        </div>
      </div>
    );
  }
}

class ProgressionBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      top: this.props.time / 1000 + this.props.offset + "px",
      display: this.props.enabled ? "block" : "none"
    };

    return (
      <div style={style} className="progressionBar">{'\u00A0'}</div>
    );
  }
}

export default Timer;
