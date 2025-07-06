import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../components/Image';
function About() {

    const data = [{
        desc: " I'm Yash Gupta, a Computer Science Engineering student with a deep passion for building scalable, real-world software solutions that blend functionality with impact. With strong hands-on experience across both frontend and backend development, I specialize in translating complex problems into elegant, user-centric applications powered by React.js, Spring Boot, MongoDB, and cloud platforms like AWS.",
        background: {
            p1: "I began my tech journey at the Meerut Institute of Engineering & Technology (MIET), where I laid the foundation for my passion in full-stack development and AI-driven systems.",
            p2: "Since then, I've built projects that solve real-world challenges—ranging from AI-powered traffic light optimization to a Fake News Detection System using multi-agent architectures and LLMs."
        },
        leadership: {
            heading: "Leadership Experience",
            content: "As the Lead of Microsoft Learn Student Ambassadors (MLSA) at MIET, I led 30+ technical events and workshops while managing a team of 6 core members and 30+ volunteers across various domains. I’ve also been an active member of the Fetch.ai Developers Group, Meerut, where I explored decentralized multi-agent solutions and contributed to intelligent systems."
        },
        interest: "I'm particularly passionate about: Frontend Development – bringing UI/UX to life with thoughtful design. AI & Multi-Agent Systems – building autonomous agents that interact intelligently. Full-Stack Engineering – creating complete, end-to-end applications. Cloud Computing (AWS, Azure) – scaling solutions for real-world deployment",
        goals: "I aim to leverage my technical and leadership skills to contribute to meaningful software projects that make life easier, smarter, and more connected. I believe in using technology as a force for good—solving problems that truly matter, and I am dedicated to making it accessible and beneficial to all.",
        hobbies: ["Traveling", "Reading", "Spiritual Practices"]
    }];

    return (
        <div className='h-full w-3/4 flex flex-col lg:flex-row justify-center items-center transit my-10'>
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
