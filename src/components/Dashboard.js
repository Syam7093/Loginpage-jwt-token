import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const navigate=useNavigate()


  useEffect(()=>{
    tokendata()
  })

  const tokendata=async()=>{
    const token=await localStorage.getItem("token")
    const tokenverify=await axios.post("http://localhost:8765/login/tockencheck",{token:token})
    console.log(tokenverify,"syamsai123")
    console.log(tokenverify.data.data.data.email)

  }

  const logoutbutton=()=>{
    localStorage.clear()
    navigate("/")

  }


  return (
    <div>
      <button onClick={()=>{logoutbutton()}}>Logout</button>
      <h1>welcome to dashboards</h1>
    </div>
  )
}
