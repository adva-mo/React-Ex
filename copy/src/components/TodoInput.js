import React, { useState, useEffect, useRef } from "react";

function TodoInput({ setTodos, todos }) {
  const LOCAL = "app.todos";
  const [inputValue, setInputValue] = useState("");
  const myInput = useRef();

  useEffect(
    function addTodosToLocal() {
      console.log(todos);
      if (!todos || todos.length === 0) return;
      if (todos == []) localStorage.removeItem(LOCAL);
      localStorage.setItem(LOCAL, JSON.stringify(todos));
    },
    [todos]
  );

  const inputChangeHandler = ({ target }) => {
    setInputValue((prev) => target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    setTodos((prev) => [...prev, inputValue]);
    myInput.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={inputChangeHandler} ref={myInput} />
    </form>
  );
}

export default TodoInput;
