import React, { useEffect, useState } from 'react'
import '../../src/App.css';
import axios from "axios"
import {Link, useNavigate} from 'react-router-dom'

export const Loginpage = () => {

  const navigate=useNavigate()

 

  useEffect(() => {
    const emailFromStorage = localStorage.getItem("email");
    console.log(emailFromStorage,"emailFromStorage")
    const passwordFromStorage = localStorage.getItem("password");
    console.log(passwordFromStorage,"passwordFromStorage")
    if (emailFromStorage && passwordFromStorage) {
        setemail(emailFromStorage);
        setpassword(passwordFromStorage);
    }
}, []);

  
  const [email,setemail]=useState('')
  const [password,setpassword]=useState("")

  const loginpage=async()=>{

    let data={
     
      email:email,
      password:password
    }
    const logindata=await axios.post("http://localhost:8765/login/login",data)
    console.log(logindata,"logindata")
    if(logindata.data.isLogin==true)
    {
      localStorage.setItem("token",logindata.data.data)
      localStorage.setItem('email',email)
      localStorage.setItem('password',password)
      localStorage.setItem("islogin",JSON.stringify(true))
      navigate("dash")
    }
    else{
      console.log("give correct user details")
      // console.log(error)
    }

  }
  return (
    <div className='top'>
      
    <div>
    <label>Email</label>
    <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
    </div>
    <div>
    <label>Password</label>
    <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
    </div>
<button type="submit" onClick={()=>{loginpage()}}>submit</button>

<h3>You dont have account <Link to="signup">Create</Link></h3>
    </div>
  )
}
