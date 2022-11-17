import React, { useState, useRef } from "react";
import Delete from "./Delete";
import formatBirthday from "../utils/utils.js";

function AvatarCard({
  name,
  bornIn,
  plays,
  birthday,
  img,
  id,
  dispatchMembers,
}) {
  const [isEditable, setIsEditable] = useState(false);
  const myForm = useRef("");

  const handleEditMember = (e) => {
    e.preventDefault();
    if (isEditable) {
      setIsEditable((prev) => !prev);
      handleSubmit();
    }
    setIsEditable((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e && e.preventDefault();
    const formData = new FormData(myForm.current);
    const memberData = Object.fromEntries(formData);
    console.log(memberData);
    myForm.current.reset();
    setIsEditable((prev) => !prev);
    dispatchMembers({
      type: "EDIT-MEMBER",
      playload: { memberdata: memberData, id: "" },
    });
  };

  return (
    <form ref={myForm} onSubmit={handleSubmit} className="avatar-card">
      <h3>{name}</h3>
      <img src={`${img}`} alt="thumbnail" />
      <p>
        birthday:
        <input
          name="birthday"
          placeholder={formatBirthday(birthday)}
          readOnly={!isEditable}
        />
      </p>
      <p>
        plays:
        <input name="plays" placeholder={plays} readOnly={!isEditable} />
      </p>
      <p>
        Born in:
        <input name="bornIn" placeholder={bornIn} readOnly={!isEditable} />
      </p>
      <button onClick={handleEditMember} id={id}>
        {isEditable ? "ok" : "edit"}
      </button>
      <Delete
        id={id}
        dispatchMembers={dispatchMembers}
        setIsEditable={setIsEditable}
        isEditable={isEditable}
      />
    </form>
    // </div>
  );
}
export default AvatarCard;
