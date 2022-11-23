import axios from "axios";
import React from "react";
import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      display: [],
    };
  }
  async componentDidMount() {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      console.log(response.data);
      this.setState((prev) => {
        return { countries: [...response.data], display: [...response.data] };
      });
    } catch (e) {
      console.log(e);
    }
  }
  handleChange({ target }) {
    console.log(target.value);
    const filtered = this.state.countries.filter((c) => {
      return c.name.startsWith(target.value);
    });
    console.log(filtered);
    this.setState((prev) => {
      if (target.value === "") return { display: [...this.state.countries] };
      else return { display: [...filtered] };
    });
  }
  render() {
    return (
      <>
        <input onChange={this.handleChange.bind(this)} />
        {this.state.countries.length > 1 &&
          this.state.display.map((c) => {
            return <li>{c.name}</li>;
          })}
      </>
    );
  }
}
export default App;
