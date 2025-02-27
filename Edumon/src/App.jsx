// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import StudentSignUp from "./pages/StudentSignUp"
import StudentLogin from "./pages/StudentLogin"
import SchoolSignUp from "./pages/SchoolSignUp"
import SchoolLogin from "./pages/SchoolLogin"
import LoginOptions from "./pages/LoginOptions"
import SchoolDashboard from "./pages/SchoolDashboard";
import StudentDashboard from "./pages/studentDashboard"
import ProtectedRoute from "./pages/ProtectedRoute"

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/loginOptions' element={<LoginOptions />} />
      <Route path='/student/signup' element={<StudentSignUp />} />
      <Route path='/student/login' element={<StudentLogin />} />
      <Route path='/school/signup' element={<SchoolSignUp/>} />
      <Route path='/school/login' element={<SchoolLogin />} />
      <Route element={<ProtectedRoute />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
      </Route>
      <Route element={<ProtectedRoute />}>
          <Route path="/school/dashboard" element={<SchoolDashboard />} />
      </Route>
      

      
    </Routes>
    </>
  )
}

export default App