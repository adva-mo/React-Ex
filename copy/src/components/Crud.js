import React from "react";
import axios from "axios";

function Crud({ id, dispatchMembers, setUpdateMembers, members }) {
  async function handleDelete(id) {
    try {
      const response = await axios.delete(
        `https://6374adb348dfab73a4e57943.mockapi.io/membres/${id}`
      );
      //   console.log(response);
      if (!response.data) throw new Error("errrrror");
      await dispatchMembers({
        type: "DELETE-MEMBER",
        playload: id,
      });
    } catch {
      console.log("e");
    }
  }

  const editMember = ({ target }) => {
    console.log(target.id);
  };

  return (
    <div className="buttons-container">
      <button onClick={() => handleDelete(id)} id={id}>
        delete
      </button>
      <button onClick={editMember} id={id}>
        edit
      </button>
    </div>
  );
}

export default Crud;
