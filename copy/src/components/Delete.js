import React from "react";
import axios from "axios";

function Crud({ id, dispatchMembers }) {
  console.log(id);
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

  return (
    <div className="buttons-container">
      <button onClick={() => handleDelete(id)} id={id}>
        delete
      </button>
    </div>
  );
}

export default Crud;
