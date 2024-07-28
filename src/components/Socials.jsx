import React from 'react'
import { FaSquareGithub  } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
function Socials() {
  return (
    <div className='flex justify-evenly items-center w-20 sm:w-32'>
      <a href="https://www.linkedin.com/in/yash-gupta-b59877280/"><GrLinkedin className="h-5 w-5"/></a>
      <a href="https://github.com/YashGupta-24"><FaSquareGithub className="h-6 w-6"/></a>
    </div>
  )
}

export default Socials
