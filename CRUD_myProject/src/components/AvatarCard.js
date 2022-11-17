import React, { useState, useRef } from "react";
import Delete from "./Delete";
import formatBirthday from "../utils/utils.js";
import axios from "axios";

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
    // console.log(e.target.id);
    e.preventDefault();
    if (isEditable) {
      setIsEditable((prev) => !prev);
      formData(e.target.id);
    }
    setIsEditable((prev) => !prev);
  };

  const formData = (id) => {
    const formData = new FormData(myForm.current);
    const memberData = Object.fromEntries(formData);
    // console.log(memberData);
    myForm.current.reset();
    setIsEditable((prev) => !prev);
    updateUser(id, memberData);
    // dispatchMembers({
    //   type: "EDIT-MEMBER",
    //   playload: { memberdata: memberData, id: id },
    // });
  };

  const updateUser = async (id, memberData) => {
    console.log("put");
    try {
      const response = await axios.put(
        `https://6374adb348dfab73a4e57943.mockapi.io/membres/${id}`,
        memberData
      );

      console.log(response);
      if (!response.data) throw new Error("errrrror");
      await dispatchMembers({
        type: "EDIT-MEMBER",
        playload: { memberdata: memberData, id: id },
      });
    } catch {
      console.log("e");
    }
  };

  const handleSubmit = (e) => {
    e && e.preventDefault();
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
