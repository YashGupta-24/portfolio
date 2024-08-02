import React from 'react'
import Image from '../components/Image.jsx'
import Navbar from '../sections/Navbar.jsx';
import Button from '../components/Button.jsx';
import Footer from '../sections/Footer.jsx';
import ScrollToTop from '../ScrollToTop.jsx';
function AboutDetail() {

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
    <div className='h-full flex flex-col justify-center items-center bg-gradient-to-b from-primary to-secondary'>
      <Navbar />
      <ScrollToTop />
      <div className='h-full w-3/4 flex flex-col lg:flex-row mt-20 lg:mt-40'>
        <div className='h-full lg:w-1/2'>
          <h1 className='text-4xl md:text-6xl my-6 font-heading text-heading'>About</h1>
          {
            data.map((item, index) => {
              return (
                <div key={index} className='my-10 '>
                  <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{item.desc}</p>
                  <h1 className='my-3 text-xl font-semibold font-heading text-heading'>Little Background</h1>
                  <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{item.background.p1}</p>
                  <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{item.background.p2}</p>
                  <h1 className='my-3 text-xl font-semibold font-heading text-heading'>{item.leadership.heading}</h1>
                  <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{item.leadership.content}</p>
                  <h1 className='my-3 text-xl font-semibold font-heading text-heading'>Interests</h1>
                  <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{item.interest}</p>
                  <h1 className='my-3 text-xl font-semibold font-heading text-heading'>Goals</h1>
                  <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{item.goals}</p>
                  <h1 className='my-3 text-xl font-semibold font-heading text-heading'>Things I Love</h1>
                  {
                    item.hobbies.map((hobby, index) => {
                      return (
                        <div >
                          <li className='font-body font-semibold'>{hobby}</li>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
        <div className='h-fit lg:w-1/2 lg:mt-32'>
          <Image />
        </div>
      </div>
      <Button name="Check out my Work" link="/works" show={false} />
      <Footer />
    </div>

  )
}

export default AboutDetail
