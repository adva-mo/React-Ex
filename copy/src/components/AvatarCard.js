import React from "react";

function AvatarCard({ name, gender, email, phone, img }) {
  return (
    <div className="avatar-card">
      <h3>{name}</h3>
      <img src={`${img}`} alt="thumbnail" />
      <p>{phone}</p>
      <p>{email}</p>
      <p>{gender}</p>
    </div>
  );
}

export default AvatarCard;
