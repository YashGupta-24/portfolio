import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Image from '../components/Image';
function About() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data/About.json')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className='h-full w-3/4 flex flex-col lg:flex-row justify-center items-center transit'>
            <div className='lg:w-1/2 h-full'>
                <h1 className='text-4xl md:text-6xl my-5 font-heading text-heading'>About</h1>
                {
                    data.map((item, index) => {
                        return (
                            <>
                                <p className='my-8 text-sm sm:text-base font-body font-semibold text-justify'>{item.desc}</p>
                                <h1 className='my-3 text-md md:text-xl font-heading text-heading font-semibold'>Little Background</h1>
                                <p className='mb-5 text-sm sm:text-base font-body font-semibold text-justify'>{item.background.p1}</p>
                                <p className='mb-6 hidden sm:block font-body font-semibold text-justify '>{item.background.p2}...</p>
                            </>
                        )
                    })
                }
                <button className='rounded-lg bg-tertiary text-white py-2 px-3 mb-8 font-heading hover:bg-hover transition-all duration-300'><Link to={"/about"} >Read More</Link></button>
            </div>
            <div className='w-full md:w-2/3 lg:w-1/2 h-full'>
                <Image />
            </div>
        </div>
    )
}

export default About
