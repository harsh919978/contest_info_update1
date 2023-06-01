import React from "react";

export default function Register(props)
{
   const[registerdata,setregisterdata]=React.useState({
    name:"",
    email:"",
    password:""
   })

   function handlechange(event){
    setregisterdata(function(prev)
    {
        return {...prev,[event.target.name]:event.target.value}
    })
   }
   function transferdata(e){
    e.preventDefault();
    console.log("wahh bhai")
    let obj=registerdata
    props.onregister(obj)
   }
    return <>
       <h2>Register</h2>
       <form className="register--form">
       <label htmlFor="name">Full name</label>
        <input
        type="text"
        name="name"
        id="name"
        value={registerdata.name}
        onChange={handlechange}
        placeholder="Enter full name"
        />
       <label htmlFor="email">Email</label> 
        <input 
        type="email"
        name="email"
        id="email"
        placeholder="********.com"
        value={registerdata.email}
        onChange={handlechange}
        />
        <label htmlFor="password">Password</label>
        <input 
        type="password"
        name="password"
        id="password"
        placeholder="************"
        value={registerdata.password}
        onChange={handlechange}
        />
        <button onClick={transferdata}>Sign up</button>
       </form>
       <button className="link--btn" onClick={()=>props.togglepage("login")}>Already have an account? Login here.</button>
    </>
}