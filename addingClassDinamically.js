//! adding classes dinamically based on some condition

import styled from "./copy/node_modules/styled-components";
import React from "react";

function Form() {
  //functions....

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={!isInvalid && "invalid"}>
        <label>Course goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add goal</Button>
    </form>
  );
}
export default Form;

//! adding styled components
//* instal styled components from npm "npm i --save styled-components"
//* resolve the problems that css is not scoped
//* we can create re=usable styled components and place them on seperate file or create a one time use component and place it in the file wehre its going ro be used

const FormControl = styled.div`
  //styles....
  & label {
  }
  &:hover {
  }
`;

const Button = styled.button`
  font: inherit;
  padding: 1px solid black;

  &:focus {
    outline: none;
  }
`;

//! we can also use props to pass on the css attributes

const FormControl2 = styled.div`
  width: 100% //styles....
    & label {

  }
  & input {
    border: 1px solidm ${(props) => (props.invalid ? "red" : "black")};
  }
  @media (min-width: 760px) {
    width: auto; //?takes all thw width pn small devices
  }
`;
function Form2() {
  //functions....

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl2 invalide={!isInvalid}>
        <label>Course goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl2>
      <Button type="submit">Add goal</Button>
    </form>
  );
}
