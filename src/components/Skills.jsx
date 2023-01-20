import React from 'react'

import {code} from '../assets'


const Skills = () => {
  return (
    <section id="skills" className="services section">
        <div className="container">
            <div className="w-full">
                <h3 className="text-center" data-title="What I Do">Skills</h3>
            </div>
            <div className="w-full bg-red-20 flex flex-row">
                <div className="card-wrap w-1/3 bg-red-500">
                    <div className="card" data-card="UI/UX">
                        <div className="card-content">
                            <img src={code} className="icon" alt="" />
                            <h3 className="title-sm">HTML & CSS</h3>
                            <p className="text">
                                Designing various sites was my passion in high school.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-wrap w-1/3 bg-pink-300">
                    <div className="card" data-card="Code">
                        <div className="card-content">
                            <img src="../assets/code-icon.png" className="icon" alt="" />
                            <h3 className="title-sm">C++</h3>
                            <p className="text">
                                I learned it in high school and now I'm constantly improving in college.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-wrap w-1/3 bg-yellow-200">
                    <div className="card" data-card="App">
                        <div className="card-content">
                            <img src="../assets/app-icon.png" className="icon" alt="" />
                            <h3 className="title-sm">React Native</h3>
                            <p className="text">
                                I started learning it myself and now I know that is what I want to do.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills