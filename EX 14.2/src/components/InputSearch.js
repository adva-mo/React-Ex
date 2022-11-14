import React from "react";

function InputSearch({ setSearchTerm, searchTerm }) {
  const searchHandler = ({ target }) => {
    setSearchTerm(target.value);
  };
  return (
    <div>
      <input onChange={searchHandler} type="text" />
    </div>
  );
}
export default InputSearch;
