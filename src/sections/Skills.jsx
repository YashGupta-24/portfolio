function Skills() {

  const skillList = [
    {
      name: "Programming Languages",
      list: ["Java", "Python", "Javascript", "C"]
    },
    {
      name: "Agentic AI",
      list: ["uAgents", "LangChain", "LangGraph", "Multi-Agent Systems"]
    },
    {
      name: "Frontend",
      list: ["HTML", "CSS", "Tailwind", "React.js"]
    },
    {
      name: "Backend",
      list: ["Spring Boot", "FastAPI", "Flask", "Node.js"]
    },
    {
      name: "Database",
      list: ["MongoDb", "MySQL"]
    },
    {
      name: "Cloud Services",
      list: ["AWS", "Azure "]
    },
    {
      name: "Tools",
      list: ["Git& GitHub", "Postman", "VS Code", "Figma", "Canva"]
    },
    {
      name: "Core CS",
      list: ["OOPs", "DSA", "Time & Space Complexity", "System Design", "DBMS", "Computer Networks"]
    },
  ]

  return (
    <div className='h-full md:h-screen w-3/4 flex flex-col mb-10 md:mb-44 lg:mb-20 transit'>
      <h1 className='text-4xl md:text-6xl my-5 font-heading text-heading'>Skills</h1>
      <div className='grid sm:grid-cols-2 gap-8'>
        {
          skillList.map((item, index) => {
            return (
              <div >
                <h1 className='sm:my-3 text-md md:text-xl font-heading text-heading font-semibold'>{item.name}</h1>
                <div key={index} className='m-3 p-3 rounded-md grid sm:grid-cols-2'>
                  {item.list.map((skill, index) => {
                    return (
                      <li key={index} className='text-sm sm:text-base font-body font-semibold'>{skill}</li>
                    )
                  })}
                </div>
                <hr className='border-[1px] border-heading' />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills
