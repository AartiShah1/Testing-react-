

//  Functional Component


function Users() {
    return (
      <div>
        <h1>Hello everone  from Users Component </h1>
        <h1>Addition of two number 10+20={10+20}</h1>
        
      </div>
    );
  }
  
  export default Users;
  

  
 /*              //------------class Component
 
  import React,{Component} from "react";
  export default class Users extends Component

  {
    render()
    {
        return(
            <h1>hello it is class component</h1>
        )
       
    }
  }

  */


/*
  //    react Without JSX
 
  import React from "react";

  function Users()

   
  {
    return React.createElement('h1',null,"without jsx")
  } 
  
  export default Users;
*/
