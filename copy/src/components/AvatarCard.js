import React from "react";
import Crud from "./Crud";
import formatBirthday from "../utils/utils.js";

function AvatarCard({
  name,
  bornIn,
  plays,
  birthday,
  img,
  id,
  members,
  dispatchMembers,
  setUpdateMembers,
}) {
  return (
    <div className="avatar-card">
      <h3>{name}</h3>
      <img src={`${img}`} alt="thumbnail" />
      <p>birthday: {formatBirthday(birthday)}</p>
      <p>plays: {plays}</p>
      <p>Born in: {bornIn}</p>
      <Crud
        id={id}
        members={members}
        dispatchMembers={dispatchMembers}
        // setUpdateMembers={setUpdateMembers}
      />
    </div>
  );
}
export default AvatarCard;
