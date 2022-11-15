import React, { useState } from "react";

function Todo({ todo, setTodos, todos }) {
  const [isChecked, setIsChecked] = useState(true);

  const checkHandle = () => {
    setIsChecked((prev) => !prev);
  };

  const deleteHandle = (e) => {
    console.log(e.target.parentElement.id);
    console.log(todos);
    setTodos((current) => {
      if (current.length === 0) return [];
      return current.filter((i) => i != e.target.parentElement.id);
    });
  };
  return (
    <div id={todo}>
      {todo}
      <button onClick={deleteHandle}>delete</button>
      <input type="checkbox" onChange={checkHandle} checked={isChecked} />
    </div>
  );
}

export default Todo;
