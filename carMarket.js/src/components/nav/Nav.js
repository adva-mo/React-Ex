import React from "react";
import "./Nav.css";
import cap1letter from "../../utils/carsObj.utils";

function Nav(props) {
  const depBtnHandler = ({ target }) => {
    // console.log(e.target);
    props.setHero((prev) => target.textContent);
  };

  return (
    <>
      {props.title.map((title) => {
        return (
          <button key={title} id={title} onClick={depBtnHandler}>
            {cap1letter(title)}
          </button>
        );
      })}
    </>
  );
}

export default Nav;
