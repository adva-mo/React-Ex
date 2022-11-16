import React, { useEffect, useReducer } from "react";
import axios from "axios";

import AvatarCard from "./components/AvatarCard";
import NewMmember from "./components/NewMmember";
import { membersReducers } from "./utils/reducers";

import "./App.css";

function App() {
  const [members, dispatchMembers] = useReducer(membersReducers, null);

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    try {
      const response = await axios.get(
        "https://6374adb348dfab73a4e57943.mockapi.io/membres/"
      );
      if (response)
        dispatchMembers({
          type: "FETCHED",
          playload: [...response.data],
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>The Band Members</h1>
      <NewMmember dispatchMembers={dispatchMembers} />
      <div className="avatars-container">
        {members &&
          members.map((m) => {
            return (
              <AvatarCard
                key={m.id}
                {...m}
                members={members}
                dispatchMembers={dispatchMembers}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
