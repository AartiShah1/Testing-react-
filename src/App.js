import logo from './logo.svg';
import './App.css';
import Users from './Users';
import {useState} from 'react';


function App() {

// function bot()
// {
//   alert("login success full")
// }

  return (
    <div>
      <h1>Hello world from App.js</h1>
      <Users/>
      <bot/>
     
     {/* <button onClick={bot}>Click me</button> */}

     <button onClick={()=>alert("login Successful")}>Click me</button>
    </div>
  );
}

export default App;



//                    --------------Use state in Funtional component
/*

function App() {
  const[data,setData] = useState("anil")

function  updateData(){
  setData("aarti")
 
}

console.warn("______");
  return (
    <div className='App'>
      <h1>{data}</h1>
         
     <button onClick={updateData}>Click me</button>

    </div>
  );
}

export default App;
*/

