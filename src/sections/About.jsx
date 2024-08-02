import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../components/Image';
function About() {

    const data = [{
        desc: " I'm Yash Gupta, a passionate and dedicated software developer with a focus on creating seamless and impactful digital experiences. With a strong foundation in both frontend and backend development, I specialize in transforming complex problems into elegant and user-friendly solutions. My goal is to leverage technology to make a positive impact, ensuring that every project I undertake is both functional and aesthetically pleasing.",
        background: {
            p1: "I embarked on my journey in the tech world at the Meerut Institute of Engineering & Technology (MIET), where I developed a solid foundation in software engineering.",
            p2: "Throughout my academic career, I have consistently sought opportunities to expand my knowledge and skills, participating in various workshops, hackathons, and coding competitions."
        },
        leadership: {
            heading: "Lead of Microsoft Learn Student Ambassadors (MLSA) at MIET",
            content: "As the leader of MLSA at MIET, I have had the privilege of working with a diverse group of talented individuals. In this role, I organize and lead events that foster a community of learning and innovation. This experience has honed my leadership, collaboration, and project management skills, and has been instrumental in my growth as a tech enthusiast and community builder."
        },
        interest: "I am particularly passionate about frontend development, where I can combine my technical expertise with a keen eye for design to create intuitive and engaging user experiences. However, my interests are not limited to the frontend; I constantly try to get skilled in backend development and enjoy working on full-stack projects that require a holistic approach.",
        goals: "My goal is to leverage my skills and experience to contribute to impactful projects that make a difference in people's lives. I am constantly exploring new technologies and methodologies to stay at the forefront of the ever-evolving tech landscape. I believe in the power of technology to solve real-world problems, and I am dedicated to making technology accessible and beneficial to all.",
        hobbies: ["Traveling", "Reading", "Spiritual Practices"]
    }];

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
