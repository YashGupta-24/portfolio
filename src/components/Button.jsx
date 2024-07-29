import React from 'react'
import {Link} from 'react-router-dom'
function Button({name, link, show}) {
  return (
    <div className='h-fit my-32 sm:my-32 w-3/4 flex flex-col justify-center items-center'>
      {
        show? <h1 className='text-xl my-5 font-body font-semibold'>Got a project?</h1>: <div></div>
      }
      <button className='p-4 sm:p-6 md:p-10 rounded-3xl bg-tertiary text-lg sm:text-2xl md:text-6xl text-white font-heading hover:bg-hover transition-all duration-300'><Link to={link}>{name}</Link></button>
    </div>
  )
}

export default Button
