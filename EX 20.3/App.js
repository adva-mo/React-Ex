import React, { Component } from "react";
import "./App.css";

class Time extends Component {
  constructor() {
    super();
    this.state = {
      sec: 60,
      min: 1,
      hours: 0.016,
    };
  }
  secondsHandler({ target }) {
    console.log(target.value);
    this.setState((prev) => {
      return {
        sec: target.value,
        min: target.value / 60,
        hours: target.value / 60 / 60,
      };
    });
  }

  minutesHandler({ target }) {
    console.log(target.value);
    this.setState((prev) => {
      return {
        sec: target.value * 60,
        min: target.value,
        hours: target.value / 60,
      };
    });
  }
  hoursHandler({ target }) {
    console.log(target.value);
    this.setState((prev) => {
      return {
        sec: target.value * 60 * 60,
        min: target.value * 60,
        hours: target.value,
      };
    });
  }

  render() {
    return (
      <div className="box">
        <div>
          seconds:{" "}
          <input
            onChange={this.secondsHandler.bind(this)}
            value={this.state.sec}
          />
        </div>
        <div>
          minutes:{" "}
          <input
            onChange={this.minutesHandler.bind(this)}
            value={this.state.min}
          />
        </div>

        <div>
          hours:{" "}
          <input
            onChange={this.hoursHandler.bind(this)}
            value={this.state.hours}
          />
        </div>
      </div>
    );
  }
}

function App() {
  return <Time />;
}

export default App;
