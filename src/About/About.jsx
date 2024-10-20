import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aboutus from '../components/Aboutus'
const About = () => {
  return (
    <>
    <Navbar/>
    <div className='h-full'>
   <Aboutus/>
    </div>
     <Footer/>
    </>
  )
}

export default About