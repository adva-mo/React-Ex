import React, { Component, useState } from "react";
import "./App.css";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      completed: true,
    };
  }
  clickHandler() {
    console.log("clicked", this.props);
    this.props.setTodos((prev) => {
      const newa = prev.splice(
        (this.props.i,
        1,
        {
          name: this.props.name,
          completed: !this.props.completed,
        })
      );
      return newa;
    });
  }
  render() {
    return (
      <li onClick={this.clickHandler.bind(this)}>
        {console.log(this.props.completed)}
        {this.props.name} {this.props.completed ? "ok" : "X"}
      </li>
    );
  }
}

function App() {
  const [todos, setTodos] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);
  return (
    <ul>
      {todos.map((todo, i) => {
        return <Todo key={i} i={i} {...todo} setTodos={setTodos} />;
      })}
    </ul>
  );
}

export default App;
