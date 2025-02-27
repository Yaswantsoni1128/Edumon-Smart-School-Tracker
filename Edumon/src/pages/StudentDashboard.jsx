// import React from 'react'

import { useNavigate } from "react-router-dom"

const StudentDashboard = () => {
  const navigate = useNavigate()
  const logoutHandler = (e)=>{
    e.preventDefault()
    localStorage.removeItem("token")
    navigate("/student/login")
  }
  return (
    <>
      <div className="h-screen w-full bg-green-50 flex justify-between items-center">
        <section className="h-full w-1/6  bg-green-700 flex flex-col gap-5 p-5 justify-between items-center">
          <div className="p-5 bg-white rounded-full">
          <img src="/green_logo.png" className="w-24 h-24" alt="" />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <button className="px-5 py-2 bg-green-200 rounded-xl w-full">Dashboard</button>
            <button className="px-5 py-2 bg-green-200 rounded-xl w-full">Profile</button>
            <button className="px-5 py-2 bg-green-200 rounded-xl w-full">Remainders</button>
            <button className="px-5 py-2 bg-green-200 rounded-xl w-full">Attendence</button>
            <button className="px-5 py-2 bg-green-200 rounded-xl w-full"
            onClick={logoutHandler}
            >Logout</button>
          </div>
          <div className="p-5 text-white">❤️Yaswant</div>
        </section>
        <section className="m-auto w-5/6 text-green-600 font-bold text-4xl flex justify-center items-center">
          STUDENT DASHBOARD
        </section>
      </div>
    </>
  )
}

export default StudentDashboard