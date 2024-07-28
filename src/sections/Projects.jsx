import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { HiArrowRight } from "react-icons/hi";
function Projects() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/data/Projects.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
 
  return (
    <div className='h-full w-3/4 my-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
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
              :<></>
            )
          })
        }
      </div>
      <div className='flex justify-center md:justify-end mt-5 md:my-3 text-tertiary font-bold'>
        <Link to={"/works"} className='flex items-center px-2 font-heading hover:text-heading transition-all duration-200'>All Work <HiArrowRight /></Link>
      </div>
    </div>

  )
}

export default Projects
