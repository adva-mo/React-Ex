//! reducers

import { useReducer } from "react";

const [state, dispatchFN] = useReducer(reducerFn, initialState, initFn);
//* state = the state snapshot used in the component re-render re-evaluation cycle
//* a function that can be used to dispatch a new function (i.e. trigger an update of the state)
//* redcuerFN- (prevState,action)=> newState ; //trigged automatically once an action is dispatched (via dispatchFN())- it recieves the latest state snapshot and should return the new, update state.
