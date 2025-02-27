// import React from 'react'

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

const SchoolLogin = () => {
  let [password, setPassword] = useState("")
  let [email, setEmail] = useState("")
  const navigate = useNavigate()
  const submitHandler = async (e)=>{
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:4000/login",{
        email,
        password,
        isStudent: false
      });
      console.log("sign up success ",response.data);
      localStorage.setItem("token", response.data.token);

      if (response.data.redirect) {
        navigate(response.data.redirect);
      }

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    
    <div className="flex flex-col gap-5 justify-center items-center h-screen bg-green-100">
    <h2 className="absolute top-5 left-5 text-green-600 text-lg">
          <Link to="/" className="px-4 py-2 bg-white shadow-md rounded-lg hover:bg-green-200 transition cursor-pointer">
            ← Back to Home
          </Link>
        </h2>
      <h1 className='text-4xl text-green-600 font-bold'>Login as School</h1>
      <form  
      onSubmit={submitHandler}
      method = "post"
      action = "/"
      className="w-1/2 flex flex-col p-6 gap-5 bg-green-50 rounded-xl shadow-[0px_0px_12px_rgba(0,0,0,0.20)] z-10 md:w-1/4 ">
      <div className="flex justify-around items-center gap-0 border-[1.5px] border-green-400 rounded-xl">
          <img src="/letter.png" alt=""  className="m-2 h-6 w-6"/>
        <input 
        type="email" 
        placeholder="Email" 
        name = "email"
        value = {email}
        onChange={(e)=>{
          setEmail(e.target.value) 
        }}
        className=" w-[90%] rounded outline-none text-md px-1 py-2" />

        </div>
        <div className="flex justify-between items-center gap-0 border-[1.5px] border-green-400 rounded-xl">
          <img src="/padlock.png" alt="" className="m-2 w-6 h-6"/>
        <input 
        type="password" 
        placeholder="Password" 
        name = "password"
        value = {password}
        onChange={(e)=>{
          setPassword(e.target.value) 
        }}
        className="w-[90%]  rounded outline-none text-md px-1 py-2" />
        
        </div>
        <button 
        className=" bg-green-600 rounded-xl outline-none text-lg font-semibold text-white px-5 py-2 cursor-pointer">Login</button>
      </form>
      <h2 className="text-green-600">Already have an account? <Link to={'/school/signup'} className="text-blue-600">Sign Up</Link> </h2>
    </div>
    </>
  )
}

export default SchoolLogin