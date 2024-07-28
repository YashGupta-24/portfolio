import React, { useEffect, useState } from 'react'
import Socials from './Socials'
import { HiArrowLongRight } from "react-icons/hi2";

function Image() {
    const [index,setIndex]=useState(0)
    const slides = ['src/assets/Images/P1.jpg','src/assets/Images/P2.jpg','src/assets/Images/P3.jpg']
    useEffect(()=>{
        const interval=setInterval(()=>setIndex((prev)=>(prev+1)%slides.length),4000)
        return ()=>clearInterval(interval)
    },[])
    return (
        <div className='h-full w-full sm:px-5 mb-4'>
            <div className='h-full w-full mb-4'>
                <img src={slides[index]} alt="" className=' w-full rounded-lg sm:rounded-xl'/>
            </div>
            <div className='flex justify-between'>
                <a href="https://www.canva.com/design/DAF6KUUNhJI/Ulwm3m7yiTVS-2s63dUORA/view?utm_content=DAF6KUUNhJI&utm_campaign=designshare&utm_medium=link&utm_source=editor" target='blank' className='flex justify-evenly items-center w-28 text-tertiary font-bold text-sm font-heading hover:text-heading transition-all duration-300'>My Resume <HiArrowLongRight /></a>
                <Socials />
            </div>
        </div>
    )
}

export default Image
