import React, { useEffect, useState } from 'react'
import Navbar from '../sections/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../sections/Footer.jsx'
import ScrollToTop from '../ScrollToTop.jsx'
function Work() {

  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch('/data/Projects.json')
     .then(response => response.json())
     .then(data => setData(data));
  },[])
  return (
    <div className='h-full w-full flex flex-col items-center bg-gradient-to-b from-primary to-secondary'>
      <Navbar />
      <ScrollToTop />
      <div className='w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5 mt-32'>
        {
          data.map((item, index) => {
            return (
              item.displayMain?
              <div>
                <a href={item.link} target='blank'>
                  <img src={item.image} alt="" className=' hover:-translate-y-3 transition-transform ease-in-out duration-700 rounded-xl' />
                </a>
                <h1 className='text-md sm:text-xl my-1 font-heading'>{item.name}</h1>
                <p className='text-sm sm:text-base font-body font-semibold'>{item.description}</p>
              </div>
              :<div></div>
            )
          })
        }
      </div>
      <h1 className='text-3xl md:text-6xl text-heading font-heading'>Other Projects</h1>
      <div className='w-3/4 my-16 transit'>
      {
          data.map((item, index) => {
            return (
              item.displayMain?
              <div></div>
              :<div >
                <a href={item.link} className='w-full h-20 flex justify-between items-center'>
                <h1 className='text-md sm:text-xl my-1 font-heading'>{item.name}</h1>
                <p className='text-sm sm:text-base hidden md:block font-body font-semibold'>{item.description}</p>
                </a>
                <hr className='border-[1px] border-heading'/>
              </div>
            )
          })
        }
      </div>
      <Button name="Let's Work Together" link="/contact" show={true}/>
      <Footer />
    </div>
  )
}

export default Work
