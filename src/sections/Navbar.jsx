import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiBarsArrowDown } from "react-icons/hi2";
function Navbar() {
  const show = () => {
    document.querySelector('.navbar').classList.toggle('hidden');
  }

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? '#A3333D' : ''
    }
  }
  return (
    <>
      <div className='h-20 w-3/4 flex justify-between items-center fixed top-0 z-50 rounded-sm px-3 backdrop-blur-lg text-heading'>
        <NavLink to={"/"} className='font-logo text-lg md:text-3xl font-bold'>YG</NavLink>
        <div className='w-2/3 lg:w-1/2 md:flex justify-evenly hidden font-heading font-bold'>
          <NavLink to={"/"} style={navLinkStyle} className="hover:text-tertiary">Home</NavLink>
          <NavLink to={"/works"} style={navLinkStyle} className="hover:text-tertiary">Work</NavLink>
          <NavLink to={"/about"} style={navLinkStyle} className="hover:text-tertiary">About</NavLink>
          <NavLink to={"/experience"} style={navLinkStyle} className="hover:text-tertiary">Experience</NavLink>
          <a href="https://www.canva.com/design/DAGxJyAObZU/rjPiB10tA1IUqVliqwge5A/edit?utm_content=DAGxJyAObZU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='blank' className="hover:text-tertiary">Resume</a>
        </div>
        <div className='md:hidden'>
          <button onClick={show}><HiBarsArrowDown /></button>
        </div>
      </div>
      <div className='navbar w-3/4 fixed top-20 hidden rounded-sm border-[1px] border-extra md:hidden z-50 backdrop-blur-lg'>
        <div className='h-44 flex flex-col justify-evenly pl-5 font-heading text-extra font-bold'>
          <NavLink to={"/"} style={navLinkStyle} className="hover:text-tertiary">Home</NavLink>
          <NavLink to={"/works"} style={navLinkStyle} className="hover:text-tertiary">Work</NavLink>
          <NavLink to={"/about"} style={navLinkStyle} className="hover:text-tertiary">About</NavLink>
          <NavLink to={"/experience"} style={navLinkStyle} className="hover:text-tertiary">Experience</NavLink>
          <a href="https://www.canva.com/design/DAGxJyAObZU/rjPiB10tA1IUqVliqwge5A/edit?utm_content=DAGxJyAObZU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='blank' className="hover:text-tertiary">Resume</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
