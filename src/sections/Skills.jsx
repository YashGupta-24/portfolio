import React, { useState } from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
function Skills() {

  const [choice, setChoice]=useState('Programming Languages');

  const skill = [
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

  const skillList = [
    {
      name: "Programming Languages",
      list: ["Java", "Javascript", "Python", "C"]
    },
    {
      name: "Web Development",
      list: ["HTML", "CSS", "Tailwind", "React.js"]
    },
    {
      name: "Data Structure & Algorithms",
      list: ["Oops", "Arrays", "Strings", "Linked List", "Stacks", "Queue", "Searching", "Sorting", "Recursion"]
    },
    {
      name: "Version Control",
      list: ["Git", "Github"]
    },
  ]

  return (
    <div className='h-full md:h-screen w-3/4 flex flex-col mb-10 md:mb-20 transit'>
      <div>
        <h1 className='text-4xl md:text-6xl my-5 font-heading text-heading'>Skills</h1>
      </div>
      <div className='md:hidden'>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <button className='p-4 sm:p-6 rounded-xl sm:rounded-3xl bg-tertiary text-[8px] sm:text-xs text-white font-heading hover:bg-hover focus:bg-hover transition-all duration-300' onClick={(e)=>setChoice(e.target.name)} name="Programming Languages">Programming Languages</button>
          <button className='p-4 sm:p-6 rounded-xl sm:rounded-3xl bg-tertiary text-[8px] sm:text-xs text-white font-heading hover:bg-hover focus:bg-hover transition-all duration-300' onClick={(e)=>setChoice(e.target.name)} name="Web Development">Web Development</button>
          <button className='p-4 sm:p-6 rounded-xl sm:rounded-3xl bg-tertiary text-[8px] sm:text-xs text-white font-heading hover:bg-hover focus:bg-hover transition-all duration-300' onClick={(e)=>setChoice(e.target.name)} name="Data Structure & Algorithms">Data Structure & Algorithms</button>
          <button className='p-4 sm:p-6 rounded-xl sm:rounded-3xl bg-tertiary text-[8px] sm:text-xs text-white font-heading hover:bg-hover focus:bg-hover transition-all duration-300' onClick={(e)=>setChoice(e.target.name)} name="Version Control">Version Control</button>
        </div>
        <div>
          {
            skillList.map((item, index) => {
              if(item.name === choice)
              return (
                <div key={index} className='m-3 p-3 border-2 border-heading rounded-md grid grid-cols-2'>
                  {item.list.map((skill, index) => {
                    return <li key={index} className='text-[0.6rem] sm:text-base font-body font-semibold'>{skill}</li>
                  })}
                </div>
              )
            })
          }
        </div>
      </div>
      <ResponsiveContainer className='hidden md:flex'>
        <BarChart data={skill} width="100%" height="100%">
          <XAxis dataKey="name" className='text-[8px] md:text-[10px] lg:text-base font-heading font-bold md:font-extrabold'></XAxis>
          <YAxis className='font-heading' />
          <Tooltip />
          <Bar dataKey="level" fill='#226F54' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Skills
