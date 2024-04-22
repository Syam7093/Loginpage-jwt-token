
import { Dashboard } from './components/Dashboard';
import { Loginpage } from './components/Loginpage';
import { Signuppage } from './components/Signuppage';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useEffect, useState } from 'react';

function App() {
  const [login,setlogin]=useState(false)

  useEffect(()=>{
    mainmain()
  })
  const mainmain=async()=>{
    const ddd=await localStorage.getItem("islogin")
    console.log(ddd,"ddd")
    setlogin(ddd)
    
  }
  return (
  <BrowserRouter>
  <Routes>
    {/* <Route path="/" element={<Loginpage></Loginpage>}></Route>
    <Route path="signup" element={<Signuppage></Signuppage>}></Route>
    <Route path="dash" element={<Dashboard></Dashboard>}></Route> */}
    {login? 
  <Route path="dash" element={<Dashboard></Dashboard>}></Route>
    : 
    <>
     <Route path="/" element={<Loginpage></Loginpage>}></Route>
    <Route path="signup" element={<Signuppage></Signuppage>}></Route>
    <Route path="dash" element={<Dashboard></Dashboard>}></Route>
    </>
    }
  </Routes>
  </BrowserRouter>
  );
}

export default App;
