import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiBarsArrowDown } from "react-icons/hi2";
function Navbar() {
  const show = () => {
    document.querySelector('.navbar').classList.toggle('hidden');
  }

  const navLinkStyle =({isActive})=>{
      return {
        color: isActive ? '#A3333D' : ''
      }
  }
  return (
    <>
      <div className='h-20 w-3/4 flex justify-between items-center fixed top-0 z-50 rounded-xl px-3 backdrop-blur-lg text-heading'>
        <NavLink to={"/"} className='font-logo text-3xl font-bold'>YG</NavLink>
        <div className='w-1/2 lg:w-2/5 md:flex justify-evenly hidden font-heading font-bold'>
          <NavLink to={"/"} style={navLinkStyle} className="hover:text-tertiary">Home</NavLink>
          <NavLink to={"/works"} style={navLinkStyle} className="hover:text-tertiary">Work</NavLink>
          <NavLink to={"/about"} style={navLinkStyle} className="hover:text-tertiary">About</NavLink>
          <a href="https://www.canva.com/design/DAF6KUUNhJI/Ulwm3m7yiTVS-2s63dUORA/view?utm_content=DAF6KUUNhJI&utm_campaign=designshare&utm_medium=link&utm_source=editor" target='blank' className="hover:text-tertiary">Resume</a>
        </div>
        <div className='md:hidden'>
          <button onClick={show}><HiBarsArrowDown /></button>
        </div>
      </div>
      <div className='navbar w-3/4 fixed top-20 hidden rounded-xl border-[1px] border-extra md:hidden z-50 backdrop-blur-lg'>
        <div className='h-44 flex flex-col justify-evenly pl-5 font-heading text-extra font-bold'>
          <NavLink to={"/"} style={navLinkStyle} className="hover:text-tertiary">Home</NavLink>
          <NavLink to={"/works"} style={navLinkStyle} className="hover:text-tertiary">Work</NavLink>
          <NavLink to={"/about"} style={navLinkStyle} className="hover:text-tertiary">About</NavLink>
          <a href="https://www.canva.com/design/DAF6KUUNhJI/Ulwm3m7yiTVS-2s63dUORA/view?utm_content=DAF6KUUNhJI&utm_campaign=designshare&utm_medium=link&utm_source=editor" target='blank' className="hover:text-tertiary">Resume</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
