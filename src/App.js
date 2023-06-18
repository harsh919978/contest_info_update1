import logo from './logo.svg';
import './App.css';
import Website from "./Website";
import Login from'./Login'
import React from "react";

import Register from "./Register"
import LoginImg from './component/login.jpeg'
function App() {
   const[decide,setdecide]=React.useState("login")
   const[validated,setvalidated]=React.useState(true);
   function togglepage(page)
   {
    setdecide(page)
   }
   function onregister(obj)
   {
    //console.log("harhs")
    console.log(obj)
   }
  return (
    <>
    {!validated &&
    <div className="login--page">
    <img src= {LoginImg} id="login" alt="login" />

      <div id="cover">
    {decide === "login" ?<Login togglepage={togglepage}/>:<Register togglepage={togglepage}
    onregister={onregister}
    />}
    </div>
    </div>}
    {validated && <Website />}

    
    </>
  );
}

export default App;
