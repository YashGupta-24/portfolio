import React, { useState } from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer';
import picture from '../assets/picture.jpg'
import ScrollToTop from '../ScrollToTop';
import { Link } from "react-router-dom"
function ContactForm() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [site, setSite] = useState('');
  const [desc, setDesc] = useState('');
  const [budget, setBudget] = useState(0.0);
  const [display, setDisplay] = useState(true);

  const submitForm = (e) => {
    const form = document.forms['response-form'];
    e.preventDefault()
    const formData = new FormData(form);
    fetch("https://script.google.com/macros/s/AKfycbykGCU8T0e0tMTlx-iQm740-H0DTyCeit5S9gmGEXFqdM4tC9yeXwc0QL_G_qBzNr9W4w/exec", {
      method: "POST",
      body: formData
    }).then((response) => response.json())
      .then((data) => { console.log(data) })
      .catch((error) => console.log(error))

    reset();
    setDisplay(false);
  }

  const reset = () => {
    setEmail('');
    setName('');
    setSite('');
    setDesc('');
    setBudget(0);
  }

  return (
    <>
      {
        display ?
          <div className='h-full flex flex-col justify-center items-center bg-gradient-to-b from-primary to-secondary'>
            <ScrollToTop />
            <Navbar />
            <div className=' h-full w-3/4 lg:w-1/2 flex flex-col my-28 '>
              <img src={picture} alt="" className='h-20 w-20 sm:h-24 sm:w-24 my-4' />
              <h1 className='text-2xl md:text-4xl my-4 font-heading text-heading'>Let's Work Together</h1>
              <p className='text-sm md:text-base my-8 font-body font-semibold'>Please answer the following questions so I can get an idea of what you're looking for.</p>
              <form name='response-form' onSubmit={(e) => submitForm(e)}>
                <h1 className='font-body font-semibold'>What's your email</h1>
                <input
                  className='border-2 border-heading w-full sm:w-1/3 my-3 h-8 rounded-md font-body font-semibold outline-none focus:border-[3px] focus:border-tertiary pl-1'
                  type="email"
                  required
                  id='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <h1 className='font-body font-semibold'>What's your name</h1>
                <input
                  className='border-2 border-heading w-full sm:w-1/3 my-3 h-8 rounded-md font-body font-semibold outline-none focus:border-[3px] focus:border-tertiary pl-1'
                  type="text"
                  required
                  id='name'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
                <h1 className='font-body font-semibold'>Where can I find your website, if you have one</h1>
                <input
                  className='border-2 border-heading w-full sm:w-1/3 my-3 h-8 rounded-md font-body font-semibold outline-none focus:border-[3px] focus:border-tertiary pl-1'
                  type="text"
                  id='website'
                  name='site'
                  value={site}
                  onChange={(e) => setSite(e.target.value)} />
                <h1 className='font-body font-semibold'>Tell me about the project</h1>
                <textarea
                  className='border-2 border-heading w-full sm:w-1/3 my-3 rounded-md font-body font-semibold outline-none focus:border-[3px] focus:border-tertiary pl-1'
                  required
                  id='desc'
                  name='desc'
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}></textarea>
                <h1 className='font-body font-semibold'>What's the ballpark budget of this project?</h1>
                <input
                  className='border-2 border-heading w-full sm:w-1/3 my-3 h-8 rounded-md font-body font-semibold outline-none focus:border-[3px] focus:border-tertiary pl-1'
                  type="number"
                  required
                  id='budget'
                  name='budget'
                  min={0}
                  step={0.01}
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)} />
                <input type="submit" className='w-fit sm:w-1/6 p-2 sm:p-1 flex rounded-lg bg-tertiary text-white font-semibold mt-3 font-heading cursor-pointer hover:bg-hover transition-all duration-200 text-sm md:text-base' value='Submit' id='submit' />
              </form>
            </div>
            <Footer />
          </div>
          :
          <div className='h-screen flex flex-col justify-center items-center'>
            <div className='w-3/4 lg:w-1/2 flex flex-col justify-center items-center'>
              <h1 className='text-xl md:text-4xl text-heading font-heading'>Form Submitted!</h1>
              <p className='my-4 font-body font-semibold text-xs sm:text-base md:text-lg'>We'll try to reach you shortly.</p>
              <Link to={"/"} className='rounded-md bg-tertiary px-4 py-2 text-white font-heading hover:bg-hover transition-all duration-300'>Back to home</Link>
            </div>
          </div>
      }
    </>
  )
}

export default ContactForm
