import React from 'react'
import { useState } from 'react';
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer';
import picture from '../assets/picture.jpg'
import ScrollToTop from '../ScrollToTop';
import { HiArrowRight } from "react-icons/hi";
function ContactForm() {
  return (
    <div className='h-full flex flex-col justify-center items-center bg-gradient-to-b from-primary to-secondary'>
      <ScrollToTop />
      <Navbar />
      <div className=' h-full w-3/4 lg:w-1/2 flex flex-col my-28 '>
          <img src={picture} alt="" className='h-20 w-20 sm:h-24 sm:w-24 my-4'/>
          <h1 className='text-4xl my-5 font-heading'>Let's Work together</h1>
          <p className='my-8 font-body font-semibold'>Please answer the following questions so I can get an idea of what you're looking for.</p>
          <h1 className='font-body font-semibold'>What's your email</h1>
          <input className='border-2 border-gray-300 w-full sm:w-1/3 my-3 h-8 rounded-md font-body font-semibold' type="email" required/>
          <h1 className='font-body font-semibold'>What's your name</h1>
          <input className='border-2 border-gray-300 w-full sm:w-1/3 my-3 h-8 rounded-md font-body font-semibold' type="text" required/>
          <h1 className='font-body font-semibold'>Where can I find your website, if you have one</h1>
          <input className='border-2 border-gray-300 w-full sm:w-1/3 my-3 h-8 rounded-md font-body font-semibold' type="url"/> 
          <h1 className='font-body font-semibold'>Tell me about the project</h1>
          <textarea className='border-2 border-gray-300 w-full sm:w-1/3 my-3 rounded-md font-body font-semibold' required ></textarea>
          <h1 className='font-body font-semibold'>What's the budget of this project?</h1>
          <input className='border-2 border-gray-300 w-full sm:w-1/3 my-3 h-8 rounded-md font-body font-semibold' type="number"  required/>
          <button className='sm:w-1/6 p-1 flex gap-2 items-center justify-center rounded-lg bg-tertiary text-white font-semibold mt-3 font-heading' >Submit <HiArrowRight /></button>
      </div>
      <Footer />
    </div>
  )
}

export default ContactForm
