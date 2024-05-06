import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'
import list from '../assets/list.json'
import Login from '../components/Login'


function Courses() {
  
  return (
    <>
      <Navbar />
      <Course />
      <Login/>
      <Footer/>
    </>
  )
}

export default Courses
