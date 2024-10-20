import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <div className='h-full'>
   <Contact/>
    </div>
     <Footer/>
    </>
  )
}

export default ContactUs