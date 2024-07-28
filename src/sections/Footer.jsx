import React from 'react'
import {Link} from 'react-router-dom'
import { FaRegCopyright } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
function Footer() {
  return (
    <div className='w-3/4 flex flex-col md:flex-row md:h-32 justify-between items-center text-[10px] sm:text-sm md:text-base text-heading font-bold font-heading'>
      <div>
        <div className='flex justify-evenly mb-3'>
        <a href="mailto:yashgupta.miet2026@gmail.com" className='hover:text-tertiary'>Email</a>
        <a href="https://www.linkedin.com/in/yash-gupta-b59877280/" className='hover:text-tertiary'>LinkedIn</a>
        </div >
        <h1 className='flex items-center'>YG &nbsp;<FaRegCopyright />&nbsp; All rights reserved</h1>
      </div>
      <div className='my-3 md:my-0'>
        <h1 className='flex items-center'>Made with &nbsp;<FaCode />&nbsp; & &nbsp;<FaHeart />&nbsp; By &nbsp; <Link to={"/"} className='hover:text-tertiary'>Yash Gupta</Link> </h1>
      </div>
    </div>
  )
}

export default Footer
