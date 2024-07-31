import {Link} from 'react-router-dom'
import { HiArrowRight } from "react-icons/hi";
import FAT from '../assets/Projects/FAT.png'
import CXI from '../assets/Projects/CXI.png'
import WF from '../assets/Projects/WF.png'
import TM from '../assets/Projects/TM.png'
function Projects() {
  const data=[
    {
        name: "Fetch-a-Thon 2.0",
        description: "Event Page",
        link: "",
        image: FAT,
        displayMain:true
    },
    {
        name: "CXI",
        description: "Landing Page",
        link: "",
        image: CXI,
        displayMain:true
    },
    {
        name: "Weather Forecast",
        description: "Weather App",
        link: "https://yashgupta-24.github.io/Weather-Forecast/",
        image: WF,
        displayMain:true
    },
    {
        name: "Trash Master",
        description: "SIH Project",
        link: "https://vishesh-04.github.io/TrashMaster/",
        image: TM,
        displayMain:true
    },
    {
        name: "Tic-Tac-Toe",
        description: "Fun Game",
        link: "https://yashgupta-24.github.io/Tic-Tac-Toe/",
        image: "",
        displayMain:false
    },
    {
        name: "Calculator",
        description: "Simple Project",
        link: "https://yashgupta-24.github.io/calculator/",
        image: "",
        displayMain:false
    },
    {
        name: "Currency Convertor",
        description: "API Management",
        link: "https://yashgupta-24.github.io/Currency-Convertor/",
        image: "",
        displayMain:false
    },
    {
        name: "Stone-Paper-Scissors",
        description: "Fun Game",
        link: "https://yashgupta-24.github.io/Stone-Paper-Scissors/",
        image: "",
        displayMain:false
    }
]
 
  return (
    <div className='h-full w-3/4 my-20 transit'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {
          data.map((item, index) => {
            return (
              item.displayMain?
              <div>
                <a href={item.link} target='blank'>
                  <img src={item.image} alt="" className=' hover:-translate-y-3 transition-transform ease-in-out duration-700 rounded-xl' />
                </a>
                <h1 className='text-md sm:text-xl my-1 font-heading'>{item.name}</h1>
                <p className='text-sm sm:text-base font-body font-semibold'>{item.description}</p>
              </div>
              :<></>
            )
          })
        }
      </div>
      <div className='flex justify-center md:justify-end mt-5 md:my-3 text-tertiary font-bold'>
        <Link to={"/works"} className='flex items-center px-2 font-heading hover:text-heading transition-all duration-200'>All Work <HiArrowRight /></Link>
      </div>
    </div>

  )
}

export default Projects
