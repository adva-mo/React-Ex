import React, { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodosList from "./components/TodosList";

function App() {
  const [todos, setTodos] = useState([]);
  const LOCAL = "app.todos";

  useEffect(
    function storeInLocalStorage() {
      const storedWins = JSON.parse(localStorage.getItem(LOCAL));
      console.log(storedWins);
      if (storedWins) {
        setTodos(storedWins);
      }
    },
    [setTodos]
  );

  return (
    <div>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
