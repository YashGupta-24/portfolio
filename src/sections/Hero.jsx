import React from 'react'
import { Link } from 'react-router-dom'
import picture from '../assets/picture.jpg'
import { FcInfo } from "react-icons/fc";
function Hero() {

    return (
        <div className='h-fit w-3/4 py-4 mt-20'>
            <div className=' h-full w-full md:w-1/2'>
                <img src={picture} alt="" className='h-20 w-20 sm:h-24 sm:w-24 my-4' />
                <div className='my-2 border-[1px] border-black w-fit px-2 rounded-2xl bg-gray-300 flex justify-between items-center text-xs sm:text-base gap-2 font-body font-semibold'> <FcInfo /> Available for freelance</div>
                <h1 className='my-4 text-xl md:text-3xl leading-tight font-heading font-bold md:font-normal text-heading'>CSE Student at MIET <br />Bringing a Holistic Approach to Web Development</h1>
                <p className='my-6 font-body font-semibold text-justify'>I'm Yash Gupta, a passionate and dedicated software developer with a focus on creating seamless and impactful digital experiences. With a strong foundation in both frontend and backend development, I specialize in transforming complex problems into elegant and user-friendly solutions.</p>
                <div className='sm:h-10 mb-3 flex flex-col sm:flex-row'>
                    <button className='h-full rounded-lg bg-tertiary px-3 py-2 text-white sm:mr-4 mb-3 text-sm font-heading hover:bg-hover transition-all duration-200'><Link to={"/contact"}>Let's Work Together</Link></button>
                    <button className='rounded-lg border-[1px] border-tertiary text-tertiary py-2 px-4 font-heading hover:text-heading hover:border-heading'><Link to={"/works"}>All work</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Hero
