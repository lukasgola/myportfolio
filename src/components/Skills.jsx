import React from 'react'

import { skills } from '../constants'


const FeatureCard = ({ icon, title, content, index }) =>{
    return(
    <div className="card-wrap w-5/6 sm:w-1/3">
        <div className="card rounded-xl" data-card="UI/UX">
            <div className="">
                <img src={icon} className="w-[90px] mb-10 mx-auto" alt="" />
                <h3 className="font-poppins font-semibold text-text1 mb-5">{title}</h3>
                <p className="font-poppins text-text1">
                    {content}
                </p>
            </div>
        </div>
    </div>
  )}

const Skills = () => {
  return (
    <section id="skills">
        <div className="container pt-20 ">
            <div className="w-full mb-10">
                <h1 className="text-center text-[40px] font-poppins font-bold text-text1">Skills</h1>
            </div>
            <div className="w-full flex flex-col sm:flex-row items-center">
                {skills.map((skill, index) => (
                    <FeatureCard key={skill.id} {...skill} index={index} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills