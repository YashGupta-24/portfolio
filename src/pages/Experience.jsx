import React from 'react'
import Image from '../components/Image.jsx'
import Navbar from '../sections/Navbar.jsx';
import Button from '../components/Button.jsx';
import Footer from '../sections/Footer.jsx';
import ScrollToTop from '../ScrollToTop.jsx';
import Certifications from '../sections/Certifications.jsx';

function Experience() {

    const data = [
        {
            position: "Summer Intern",
            company: "Hirism",
            from: "May 2025",
            to: "August 2025",
            description: "As a Summer AI Intern at Hirism, I developed an AI-powered system that automates resume–job description matching to streamline recruitment. The system reads resumes and job descriptions from PDF files, extracts text from both, and uses NLP techniques via an LLM to assign a relevance score between 1–100, along with detailed reasoning based on the job requirements. This solution improved shortlisting efficiency by approximately 60%. My work involved integrating multiple technologies, including Python, AI/ML, PDFLib, AWS EC2, React.js, LLM, and Together.AI, to deliver a scalable and efficient recruitment tool."
        },
        {
            position: "AI Developer",
            company: "Fetch.AI Developers Group",
            from: "August 2024",
            to: "August 2025",
            description: "As an AI Developer at the Fetch.ai Developers Group, Meerut, I contribute to the design and development of intelligent agent-based systems using Fetch.ai’s decentralized technology. My role involves building and deploying AI-driven solutions that leverage multi-agent systems, machine learning models, and real-time data processing. I collaborate with a community of developers to experiment with innovative use cases, including traffic management, autonomous decision-making, and smart city applications. I actively participate in research, prototyping, and knowledge sharing to advance the adoption of Fetch.ai’s ecosystem in the local developer community and beyond."
        },
        {
            position: "Lead",
            company: "Microsoft Learn Student Ambassadors(MLSA), MIET",
            from: "May 2024",
            to: "May 2025",
            description: "As the Lead of Microsoft Learn Student Ambassadors (MLSA) at Meerut Institute of Engineering & Technology (MIET), I guide and mentor a team of student ambassadors, fostering a collaborative and innovative environment. I organize and oversee events, workshops, and hackathons to promote Microsoft technologies and learning resources. Additionally, I engage with students and faculty to build a strong tech community and encourage participation in MLSA activities. By facilitating training sessions, I enhance technical skills and career readiness among students. I also connect with industry professionals and other MLSA leads to bring valuable insights and opportunities to MIET. Through effective communication and marketing strategies, I increase awareness about MLSA programs and initiatives."
        },
    ]

    return (
        <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-b from-primary to-secondary">
            <Navbar />
            <ScrollToTop />
            <div className='h-full w-3/4 flex flex-col gap-20 lg:flex-row mt-20 lg:mt-40'>
                <div className='h-full lg:w-1/2'>
                    <h1 className='text-4xl md:text-6xl my-6 font-heading text-heading'>Experience</h1>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className=''>
                                    <p className='my-3 text-xl font-semibold font-heading text-heading'>{item.position} | {item.company}</p>
                                    <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{item.from} - {item.to}</p>
                                    <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'></p>
                                    <h1 className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{item.description}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='h-fit lg:w-1/2'>
                    {/* <h1 className='text-4xl md:text-6xl my-6 font-heading text-heading'>Certifications</h1> */}
                    <Certifications />
                </div>
            </div>
            {/* <Button name="Check out my Work" link="/works" show={false} /> */}
            <Footer />
        </div>
    )
}

export default Experience
