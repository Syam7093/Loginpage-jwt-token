import React, { useState } from 'react'
import '../../src/App.css';
import axios from "axios"
import { Link } from 'react-router-dom';

export const Signuppage = () => {

  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState("")

  const signupdata=async()=>{

    let data={
      name:name,
      email:email,
      password:password
    }
    const some=await axios.post("http://localhost:8765/signup/signup",data)
    console.log(some)

  }
  return (
    <div className='top'>
      <div>
    <label>Name</label>
    <input type="text" onChange={(e)=>{setname(e.target.value)}}></input>
    </div>
    <div>
    <label>Email</label>
    <input type="text" onChange={(e)=>{setemail(e.target.value)}}></input>
    </div>
    <div>
    <label>Password</label>
    <input type="text" onChange={(e)=>{setpassword(e.target.value)}}></input>
    </div>
<button type="submit" onClick={()=>{signupdata()}}>submit</button>
<h3>You have account <Link to="/">Login</Link></h3>
    </div>
  )
}
