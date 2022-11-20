import React, { Component } from "react";
import "./App.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      display: true,
    };
  }
  clickHandler() {
    console.log("click");
    this.setState((prev) => {
      return { display: !prev.display };
    });
  }

  render() {
    return (
      <div className="main-box">
        <button onClick={this.clickHandler.bind(this)}>show/hide</button>
        <div hidden={this.state.display} className="yellow-box"></div>
      </div>
    );
  }
}

function App() {
  return <Counter />;
}

export default App;
