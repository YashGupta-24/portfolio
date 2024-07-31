import {Link} from 'react-router-dom'
import { HiArrowRight } from "react-icons/hi";
function Projects() {
  const data=[
    {
        name: "Fetch-a-Thon 2.0",
        description: "Event Page",
        link: "",
        image: "src/assets/Projects/FAT.png",
        displayMain:true
    },
    {
        name: "CXI",
        description: "Landing Page",
        link: "",
        image: "src/assets/Projects/CXI.png",
        displayMain:true
    },
    {
        name: "Weather Forecast",
        description: "Weather App",
        link: "https://yashgupta-24.github.io/Weather-Forecast/",
        image: "src/assets/Projects/WF.png",
        displayMain:true
    },
    {
        name: "Trash Master",
        description: "SIH Project",
        link: "https://vishesh-04.github.io/TrashMaster/",
        image: "src/assets/Projects/TM.png",
        displayMain:true
    },
    {
        name: "Tic-Tac-Toe",
        description: "Fun Game",
        link: "https://yashgupta-24.github.io/Tic-Tac-Toe/",
        image: "src/assets/Projects/TM.png",
        displayMain:false
    },
    {
        name: "Calculator",
        description: "Simple Project",
        link: "https://yashgupta-24.github.io/calculator/",
        image: "src/assets/Projects/TM.png",
        displayMain:false
    },
    {
        name: "Currency Convertor",
        description: "API Management",
        link: "https://yashgupta-24.github.io/Currency-Convertor/",
        image: "src/assets/Projects/TM.png",
        displayMain:false
    },
    {
        name: "Stone-Paper-Scissors",
        description: "Fun Game",
        link: "https://yashgupta-24.github.io/Stone-Paper-Scissors/",
        image: "src/assets/Projects/TM.png",
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
