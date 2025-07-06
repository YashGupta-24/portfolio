import Navbar from '../sections/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../sections/Footer.jsx'
import ScrollToTop from '../ScrollToTop.jsx'

function Work() {

  const data = [
    {
      name: "Real Time Fake News Detector",
      description: "Developed a multi-agent system that verifies the authenticity of news headlines by cross-referencing real-time web search results using LLMs and the Tavily API. The system analyzes temporal, geographical, and factual consistency to detect misinformation with ~85% accuracy. Each agent is responsible for specific verification layers, enabling modular and scalable evaluation. Tech Stack: Python, OpenAI GPT, Tavily API, Multi-Agent Systems, REST APIs",
      tech:["Python", "ASI-1 mini", "Tavily", "Multi-Agent Systems", "uAgents Framework", "Rest API" ],
      link: "",
      image: "",
      displayMain: true
    },
    {
      name: "Smart Traffic Management System",
      description: "Designed and implemented an AI-powered traffic control system that uses a multi-agent architecture to dynamically manage signal timings based on real-time vehicle density. Integrated YOLOv8 for object detection and leveraged Fetch.ai agent framework to coordinate communication between Light and Control Agents. The system enhances traffic flow efficiency by up to 35%, reducing idle wait times and congestion across intersections.t Stack: Python, YOLOv8, Fetch.ai, REST APIs, Multi-Agent Systems, LLMs",
      tech:["Python", "YOLOv8", "Fetch.AI", "Rest API", "Multi-Agent Systems", "LLMS"],
      link: "https://github.com/YashGupta-24/Smart-Traffic-Management",
      image: "",
      displayMain: true
    },
    {
      name: "Weather Forecast",
      description: "Weather App",
      link: "https://yashgupta-24.github.io/Weather-Forecast/",
      image: "",
      displayMain: false
    },
    {
      name: "Trash Master",
      description: "SIH Project",
      link: "https://vishesh-04.github.io/TrashMaster/",
      image: "",
      displayMain: false
    },
    {
      name: "Tic-Tac-Toe",
      description: "Fun Game",
      link: "https://yashgupta-24.github.io/Tic-Tac-Toe/",
      image: "",
      displayMain: false
    },
    {
      name: "Calculator",
      description: "Simple Project",
      link: "https://yashgupta-24.github.io/calculator/",
      image: "",
      displayMain: false
    },
    {
      name: "Currency Convertor",
      description: "API Management",
      link: "https://yashgupta-24.github.io/Currency-Convertor/",
      image: "",
      displayMain: false
    },
    {
      name: "Stone-Paper-Scissors",
      description: "Fun Game",
      link: "https://yashgupta-24.github.io/Stone-Paper-Scissors/",
      image: "",
      displayMain: false
    }
  ]

  return (
    <div className='h-full w-full flex flex-col items-center bg-gradient-to-b from-primary to-secondary'>
      <Navbar />
      <ScrollToTop />
      <div className='w-3/4 mt-32'>
        {
          data.map((item, index) => {
            return (
              item.displayMain ?
                <div className='w-full my-5'>
                  <a href={item.link} target='blank' className='flex gap-5 justify-center items-center mb-2'>
                    <img src={item.image} alt="" className=' hover:-translate-y-3 transition-transform ease-in-out duration-700 rounded-xl h-72' />
                    <div className='flex flex-col gap-5 w-full'>
                      <h1 className='text-md sm:text-4xl my-1 font-heading'>{item.name}</h1>
                      <p className='text-sm sm:text-base font-body font-semibold text-justify'>{item.description}</p>
                      <h1 className='text-sm sm:text-base font-body font-semibold text-justify'>Tech Stack:</h1>
                      {
                        item.tech.map((stack)=>{
                          return (
                            <ul className=''>
                              <li className='list-disc ml-5 text-sm sm:text-base font-body font-semibold text-justify'>{stack}</li>
                            </ul>
                          )
                        })
                      }
                    </div>
                  </a>
                  <hr className='border-[1px] border-heading' />
                </div>
                : <div></div>
            )
          })
        }
      </div>
      <h1 className='text-3xl md:text-6xl text-heading font-heading mt-10'>Other Projects</h1>
      <div className='w-3/4 my-16 transit'>
        {
          data.map((item, index) => {
            return (
              item.displayMain ?
                <div></div>
                : <div >
                  <a href={item.link} className='w-full h-20 flex justify-between items-center'>
                    <h1 className='text-md sm:text-xl my-1 font-heading'>{item.name}</h1>
                    <p className='text-sm sm:text-base hidden md:block font-body font-semibold'>{item.description}</p>
                  </a>
                  <hr className='border-[1px] border-heading' />
                </div>
            )
          })
        }
      </div>
      <Button name="Let's Work Together" link="/contact" show={true} />
      <Footer />
    </div>
  )
}

export default Work
