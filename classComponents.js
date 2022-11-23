//! until now we created functional components, java script function which return renderable resuts (normally jsx)
//! in react V16.8 introduced the hooks which are alternative to class components, the methos which has used till then
//! we can combine those aspects, normally we will stick to one method.

//? we can define a class with a render method that defines what to be rerendered:
//? we can NOT use hooks in the class components!
//? we will use only one render method
//? beacuse we extend component, we can use the props method if attached to this. (referse to the component)
//? to define state we will use the constrcutor function - the state always is an object!

import { Component } from "react";

//---------------------------------------
class Products extends Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

//---------------------------------------
class User extends Component {
  constructor() {
    super();
    this.state = {
      //! the state is always an object
      showUsers: true,
    };
  }
  toggleUserHandler() {
    //!the return from the setState function always an object ! react helps us to merge ths old state with the new state,(like in functional components)
    this.setState((prev) => {
      return { showUsers: !prev.showUsers };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleUserHandler.bind(this)}>
          {this.state.showUsers ? "hide" : "show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

//---lifeCycle:
//* componenetDidMount() - called once component mounted (was evaluated & rendered) // !in functional component: use effect with empty array
//* componenetDidUpdated() -called once the state in the component has changed (was evaluated and rendered) ! !in functional component: useEffect(state)
//* componenetWillUnmount() called right before the component is unmounted //! functional component: the return of the useeffect
//*

//* componenetDidUpdated() : we need to add condition to define when this function will execude, if not- will be an infinte loop

// componenetdidUpdate(prevprops,prevState){
//   if(prevState.serachTerm!==this.state.serachTerm){
//     this.setState({
//       filteredUsers: SOME-DATA.filter((user)=>{
//         user.name.imcludes(this.state.serachTerm)
//       })
//     });
//   }
// }

//* componenetDidMount() -
// componentDidMount(){
//   //send http...
//   this.setState(filteredUsers)//from a servevr//))
// }

//* componenetWillUnmount()- execute before the component is removed from the screen
// componenetWillUnmount(){
//   console.log("user will unmount");
// }
