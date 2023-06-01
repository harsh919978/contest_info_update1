import React from "react";

export default function Login(props)
{
   const[logindata,setlogindata]=React.useState({
    email:"",
    password:""

   })
    console.log(logindata)
   function handlechange(event){
    setlogindata(function(prev)
    {
        return {...prev,[event.target.name]:event.target.value}
    })

   }
    return <>
      
        <h2>Login</h2>
        
       <form className="login--form">
        
       <label htmlFor="email">email</label>
        <input 
        type="email"
        name="email"
        value={logindata.email}
        id="email"
        placeholder="********.com"
        onChange={handlechange}
        />
        <label htmlFor="password">password</label>
        <input 
         type="password"
         name="password"
         value={logindata.password}
         id="password"
         placeholder="************"
         onChange={handlechange}
          />
          <button type="submit">Log In</button>
       </form>
       <button className="link--btn" onClick={()=>props.togglepage("register")}>Don't have an account? Register here.</button>
     
    </>
}
