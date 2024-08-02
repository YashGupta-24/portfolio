import React from 'react'
import Navbar from '../sections/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../sections/Footer.jsx'
import ScrollToTop from '../ScrollToTop.jsx'

import FAT from '../assets/Projects/FAT.png'
import CXI from '../assets/Projects/CXI.png'
import WF from '../assets/Projects/WF.png'
import TM from '../assets/Projects/TM.png'
function Work() {

  const data = [
    {
      name: "Fetch-a-Thon 2.0",
      description: "Event Page",
      link: "",
      image: FAT,
      displayMain: true
    },
    {
      name: "CXI",
      description: "Landing Page",
      link: "",
      image: CXI,
      displayMain: true
    },
    {
      name: "Weather Forecast",
      description: "Weather App",
      link: "https://yashgupta-24.github.io/Weather-Forecast/",
      image: WF,
      displayMain: true
    },
    {
      name: "Trash Master",
      description: "SIH Project",
      link: "https://vishesh-04.github.io/TrashMaster/",
      image: TM,
      displayMain: true
    },
    {
      name: "Tic-Tac-Toe",
      description: "Fun Game",
      link: "https://yashgupta-24.github.io/Tic-Tac-Toe/",
      image: "",
      displayMain: false
    },
    {
      name: "Calculator",
      description: "Simple Project",
      link: "https://yashgupta-24.github.io/calculator/",
      image: "",
      displayMain: false
    },
    {
      name: "Currency Convertor",
      description: "API Management",
      link: "https://yashgupta-24.github.io/Currency-Convertor/",
      image: "",
      displayMain: false
    },
    {
      name: "Stone-Paper-Scissors",
      description: "Fun Game",
      link: "https://yashgupta-24.github.io/Stone-Paper-Scissors/",
      image: "",
      displayMain: false
    }
  ]

  return (
    <div className='h-full w-full flex flex-col items-center bg-gradient-to-b from-primary to-secondary'>
      <Navbar />
      <ScrollToTop />
      <div className='w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5 mt-32'>
        {
          data.map((item, index) => {
            return (
              item.displayMain ?
                <div>
                  <a href={item.link} target='blank'>
                    <img src={item.image} alt="" className=' hover:-translate-y-3 transition-transform ease-in-out duration-700 rounded-xl' />
                  </a>
                  <h1 className='text-md sm:text-xl my-1 font-heading'>{item.name}</h1>
                  <p className='text-sm sm:text-base font-body font-semibold'>{item.description}</p>
                </div>
                : <div></div>
            )
          })
        }
      </div>
      <h1 className='text-3xl md:text-6xl text-heading font-heading'>Other Projects</h1>
      <div className='w-3/4 my-16 transit'>
        {
          data.map((item, index) => {
            return (
              item.displayMain ?
                <div></div>
                : <div >
                  <a href={item.link} className='w-full h-20 flex justify-between items-center'>
                    <h1 className='text-md sm:text-xl my-1 font-heading'>{item.name}</h1>
                    <p className='text-sm sm:text-base hidden md:block font-body font-semibold'>{item.description}</p>
                  </a>
                  <hr className='border-[1px] border-heading' />
                </div>
            )
          })
        }
      </div>
      <Button name="Let's Work Together" link="/contact" show={true} />
      <Footer />
    </div>
  )
}

export default Work
