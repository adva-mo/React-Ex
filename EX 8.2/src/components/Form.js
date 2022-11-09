import React, { useState } from "react";

function Chechbox(props) {
  const checkboxHandler = (e) => {
    console.log(e.target);
    // setChecked((prevState) => !prevState);
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={checkboxHandler}
      ></input>
      <label>{props.lable}</label>
    </div>
  );
}

function Form() {
  // let [checked, setChecked] = useState();

  const inputs = [
    { lable: "I read the term of the App", checked: false },
    { lable: "I accept the term of the App", checked: false },
    { lable: "I want to get the weekly news letter", checked: true },
    { lable: "I want to go selld and offers", checked: true },
  ];
  return (
    <form>
      {inputs.map((input) => (
        <Chechbox {...input} />
      ))}
    </form>
  );
}

export default Form;
