export const membersReducers = (state, action) => {
  console.log("in redcucer func");
  switch (action.type) {
    case "FETCHED":
      return [...action.playload];
    case "DELETE-MEMBER":
      return deleteMember(action.playload, state);
    case "ADD-MEMBER":
      return addMember(action.playload, state);
    default:
      return state;
  }
};

export const deleteMember = (id, state) => {
  return state.filter((member) => {
    return id !== member.id;
  });
};

export const addMember = (obj, state) => {
  return [...state, obj];
};
