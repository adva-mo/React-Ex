import React from "react";
import { Component } from "react";
import "./App.css";

function Box() {
  return <div className="box"></div>;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      isBoxShows: false,
    };
  }
  componentDidMount() {
    const timer = setTimeout(() => {
      this.setState({ isBoxShows: true });
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }
  render() {
    return <>{this.state.isBoxShows && <Box />}</>;
  }
}
export default App;
