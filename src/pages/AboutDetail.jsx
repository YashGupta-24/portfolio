import React, { useEffect, useState } from 'react'
import Image from '../components/Image.jsx'
import Navbar from '../sections/Navbar.jsx';
import Button from '../components/Button.jsx';
import Footer from '../sections/Footer.jsx';
import ScrollToTop from '../ScrollToTop.jsx';
function AboutDetail() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/About.json')
      .then(response => response.json())
      .then(data => setData(data));
  })

  return (
    <div className='h-full flex flex-col justify-center items-center bg-gradient-to-b from-primary to-secondary'>
      <Navbar />
      <ScrollToTop />
      <div className='h-full w-3/4 flex flex-col lg:flex-row mt-20 lg:mt-40'>
        <div className='h-full lg:w-1/2'>
          <h1 className='text-4xl md:text-6xl my-6 font-heading text-heading'>About</h1>
          {
            data.map((item,index)=>{
              return (
                <div key={index} className='my-10 '>
                  <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{item.desc}</p>
                  <h1 className='my-3 text-xl font-semibold font-heading text-heading'>Little Background</h1>
                  <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{item.background.p1}</p>
                  <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{item.background.p2}</p>
                  <h1 className='my-3 text-xl font-semibold font-heading text-heading'>{item.leadership.heading}</h1>
                  <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{item.leadership.content}</p>
                  <h1 className='my-3 text-xl font-semibold font-heading text-heading'>Interests</h1>
                  <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{item.interest}</p>
                  <h1 className='my-3 text-xl font-semibold font-heading text-heading'>Goals</h1>
                  <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{item.goals}</p>
                  <h1 className='my-3 text-xl font-semibold font-heading text-heading'>Things I Love</h1>
                  {
                    item.hobbies.map((hobby,index)=>{
                      return (
                        <div >
                          <li className='font-body font-semibold'>{hobby}</li>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
        <div className='h-fit lg:w-1/2 lg:mt-32'>
          <Image />
        </div>
      </div>
      <Button name="Check out my Work" link="/works" show={false}/>
      <Footer />
    </div>

  )
}

export default AboutDetail
