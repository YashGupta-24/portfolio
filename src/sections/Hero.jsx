import React from 'react'
import { Link } from 'react-router-dom'
import picture from '../assets/picture.jpg'
import { FcInfo } from "react-icons/fc";
function Hero() {

    return (
        <div className='h-fit w-3/4 py-4 mt-20 '>
            <div className=' h-full w-full md:w-1/2'>
                <img src={picture} alt="" className='h-20 w-20 sm:h-24 sm:w-24 my-4' />
                <div className='my-2 border-[1px] border-black w-fit px-2 rounded-2xl bg-gray-300 flex justify-between items-center text-xs sm:text-base gap-2 font-body font-semibold'> <FcInfo /> Looking for Work</div>
                <h1 className='mt-4 text-base md:text-2xl leading-tight font-heading font-bold md:font-normal text-heading'>CSE Student at MIET,</h1>
                <h1 className='mb-4 text-base md:text-2xl leading-tight font-heading font-bold md:font-normal text-heading'>Ex-Lead @Microsoft Learn Student Ambassadors (MLSA), MIET & <br></br>AI Developer @Fetch.Ai Developers Group, Meerut</h1>
                <p className='my-6 font-body font-semibold text-justify'>Hi, I’m Yash Gupta — a passionate developer, building real-world solutions using full-stack development and Artificial Intelligent systems. With hands-on experience in projects involving LLMs, multi-agent architectures, and cloud-based applications, I specialize in crafting scalable, user-focused platforms. 

                </p>
                <div className='sm:h-10 mb-3 flex flex-col sm:flex-row'>
                    <button className='h-full rounded-lg bg-tertiary px-3 py-2 text-white sm:mr-4 mb-3 text-sm font-heading hover:bg-hover transition-all duration-200'><Link to={"/contact"}>Let's Work Together</Link></button>
                    <button className='rounded-lg border-[1px] border-tertiary text-tertiary py-2 px-4 font-heading hover:text-heading hover:border-heading'><Link to={"/works"}>Projects</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Hero
