import React, { useEffect, useState } from "react";
import Todo from "./Todo";

function TodosList({ todos, setTodos }) {
  return (
    <>
      <ul>Todos:</ul>
      {todos.map((t, i) => {
        return (
          <Todo todo={t} key={t} setTodos={setTodos} id={t} todos={todos} />
        );
      })}
    </>
  );
}

export default TodosList;
