import React from 'react'
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts'
function Skills() {

  const skill=[
    {
      name: "Java",
      level: 75
    },
    {
      name: "Javascript",
      level: 70
    },
    {
      name: "React.js",
      level: 60
    },
    {
      name: "HTML & CSS",
      level: 85
    },
    {
      name: "Tailwind",
      level: 80
    },
    {
      name: "DSA",
      level: 60
    },
    {
      name: "Git & Github",
      level: 80
    },
    {
      name: "SpringBoot",
      level: 50
    },
  ]

  const skillList=[
    {
      name: "Programming Languages",
      list: ["Java", "Javascript", "Python", "C"]
    },
    {
      name: "Web Development",
      list: ["HTML & CSS", "Bootstrap & Tailwind", "React.js"]
    },
    {
      name: "Data Structure & Algorithms",
      list: ["Oops", "Arrays", "Strings", "Linked List", "Stack & Queue", "Searching", "Sorting", "Recursion"]
    },
    {
      name: "Version Control",
      list: ["Git & Github"]
    },
  ]

  return (
    <div className='h-full md:h-screen w-3/4 flex flex-col mb-20'>
      <div>
        <h1 className='text-4xl md:text-6xl my-5 font-heading text-heading'>Skills</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:hidden'>
       {
        skillList.map((item, index)=>{
          return(
            <div key={index} className='m-3 p-3 border-2 border-extra rounded-md'>
              <h1 className='text-sm sm:text-xl mb-2 font-heading'>{item.name}</h1>
                {item.list.map((skill, index) => {
                  return <li key={index} className='text-xs sm:text-base font-body font-semibold'>{skill}</li>
                })}
            </div>
          )
        })
       }
      </div>
      <ResponsiveContainer className='hidden md:flex'>
        <BarChart data={skill} width="100%" height="100%">
          <XAxis dataKey="name" className='text-[7px] md:text-[10px] lg:text-base font-heading font-bold'></XAxis>
          <YAxis className='font-heading'/>
          <Tooltip />
          <Bar dataKey="level" fill='#226F54'/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Skills
