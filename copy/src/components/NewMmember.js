import React from "react";
import axios from "axios";

function NewMmember({ dispatchMembers }) {
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newMemeber = Object.fromEntries(formData);
    addMmember(newMemeber);
    e.target.reset();
  };

  const addMmember = async (obj) => {
    try {
      const result = await axios.post(
        "https://6374adb348dfab73a4e57943.mockapi.io/membres",
        obj
      );
      if (!result.data) throw new Error("ERROR ADDING");
      await dispatchMembers({
        type: "ADD-MEMBER",
        playload: obj,
      });
    } catch {
      console.log("e");
    }
  };

  return (
    <div className="flex-column">
      <form onSubmit={submitHandler}>
        <fieldset className="flex-column">
          <legend>new member</legend>
          <div>
            name:
            <input name="name" type="text"></input>
          </div>
          <div>
            link to picture:
            <input name="img" type="text"></input>
          </div>
          <div>
            birthday:
            <input name="birthday" type="text"></input>
          </div>
          <div>
            plays:
            <input name="plays" type="text"></input>
          </div>
          <div>
            born in:
            <input name="bornIn" type="text"></input>
          </div>
          <button>add</button>
        </fieldset>
      </form>
    </div>
  );
}

export default NewMmember;
