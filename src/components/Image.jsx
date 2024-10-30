import React, { useEffect, useState } from 'react'
import Socials from './Socials'
import { HiArrowLongRight } from "react-icons/hi2";
import P1 from '../assets/Images/P1.jpg';
import P2 from '../assets/Images/P2.jpg';
import P3 from '../assets/Images/P3.jpg';
import P4 from '../assets/Images/P4.jpg';
import P5 from '../assets/Images/P5.jpg';

function Image() {
    const [index, setIndex] = useState(0)
    const slides = [P1, P2, P3, P4, P5]
    useEffect(() => {
        const interval = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 4000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className='h-full w-full sm:px-5 mb-4'>
            <div className='h-full w-full mb-4'>
                <img src={slides[index]} alt="" className=' w-full rounded-lg sm:rounded-xl' />
            </div>
            <div className='flex justify-between'>
                <a href="https://www.canva.com/design/DAF6KUUNhJI/Ulwm3m7yiTVS-2s63dUORA/view?utm_content=DAF6KUUNhJI&utm_campaign=designshare&utm_medium=link&utm_source=editor" target='blank' className='flex justify-evenly items-center w-28 text-tertiary font-bold text-sm font-heading hover:text-heading transition-all duration-300'>My Resume <HiArrowLongRight /></a>
                <Socials />
            </div>
        </div>
    )
}

export default Image
