//? better to make a store folder where we will store our contexts
// we can handle multiple contexts
//? we will use context if we have component which
//! when we use context we make the component not-dinamic

import React from "react";
const logOutHandler = () => {};

const authContext = React.createContext({
  isloggedin: false,
  onLogout: logOutHandler, //we can transfer functions
});

export default authContext;

// we will then need to wrap our  curresponding components in a context provider
// we will import the authContext in our father component that are currespond to the context.
//? there is a way using cotext consumer to get data in the components or using usecontext
import React from "react";

function App() {
  return (
    <authContext.Provider>
      <header>{<Login />}</header>
      <main>{/* //here we handle the actuallogin/out proccess */}</main>
    </authContext.Provider>
  );
}

// export default App;

//* the next component will use data passe from cotext with props drilling
// import usecontext/

const Login = () => {
  const ctx = usecontext(authContext);
};
