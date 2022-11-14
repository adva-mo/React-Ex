import React from "react";
import AvatarCard from "./AvatarCard";

function MappedAvatars({ dataOfAvatar, searchTerm }) {
  let filteredARR = dataOfAvatar.filter((avatar) => {
    return avatar.name.toLowerCase().includes(searchTerm) || !searchTerm;
  });
  console.log(searchTerm);
  return (
    <div className="avatars-container">
      {filteredARR.map((a, i) => {
        return <AvatarCard {...a} key={a.name} />;
      })}
    </div>
  );
}

export default MappedAvatars;
