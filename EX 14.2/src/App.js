import React, { useEffect, useState, useRef, axios } from "react";
import "./App.css";
import InputSearch from "./components/InputSearch";
import MappedAvatars from "./components/MappedAvatars";

function App() {
  const [dataOfAvatar, setDataOfAvatar] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAvatars();
  }, []);

  async function getAvatars() {
    try {
      const res = await fetch("https://randomuser.me/api/?results=10");
      const data = await res.json();
      const results = data.results.map((avatar) => {
        return {
          name: `${avatar.name.first} ${avatar.name.last}`,
          gender: avatar.gender,
          email: avatar.email,
          phone: avatar.phone,
          img: avatar.picture.thumbnail,
        };
      });
      setDataOfAvatar((prev) => results);
    } catch {
      console.log("e");
    }
  }
  return (
    <div>
      <div>Random avatars</div>
      <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {dataOfAvatar && (
        <MappedAvatars searchTerm={searchTerm} dataOfAvatar={dataOfAvatar} />
      )}
    </div>
  );
}

export default App;
