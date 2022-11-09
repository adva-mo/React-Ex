import React, { useState } from "react";
import "./form.css";

function formEvents() {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredDate,setEnteredDate] = useState()

  //? using one to state to control all form:
  const [userInput, setuserInput] = useState({
    enteredTitle: "",
    enteredamount: "",
    entereddate: "",
  });
  //?we need to use cb function when updating the state becuse we dependes on the current state nd we depend on the prev states
  const titleChangeHandler = (e) => {
    // setEnteredTitle(e.target.value);
    setuserInput((prevSyaet) => {
      return { ...prevSyaet, enteredTitle: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  return (
    <div className="new-expense">
      <form>
        <div className="new-epense_controls">
          <div className="new-epense_control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-epense_control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-epense_control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" />
          </div>
        </div>
        <div className="new-expense_actions">
          <button>Add expense</button>
        </div>
      </form>
    </div>
  );
}

export default formEvents;
