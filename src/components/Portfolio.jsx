import React, { useState } from 'react'

import { projects } from '../constants';

import Filter from './Filter';

import styles from '../style';

import { motion } from 'framer-motion';



const SingleCard = ({title, img}) => {
    return(
        <motion.div layout whileHover={{ scale: 1.1 }} className={`${styles.glassContainer2} w-[250px] h-[150px] rounded-xl flex flex-row relative`}>
            <div className='h-full w-2/3 text-center'>
                <p className='font-poppins text-text1 font-semibold mt-[60px]'>
                    {title}  
                </p>
            </div>
            
            <img src={img} alt="" className='object-cover h-[120px] absolute right-[15px] top-[15px]' />
        </motion.div>
    )
}


const Portfolio = () => {

    const [filtered, setFiltered] = useState([]);
    const [activeBtn, setActiveBtn] = useState('all');

  return (
    <div id="portfolio">
        <div className="container mt-[50px]">
            <div className="w-full">
                <h1 className="text-center text-[40px] font-poppins font-bold text-text1">Portfolio</h1>
            </div>
            <div className='w-full h-[100px] pt-[30px]'>
                <Filter 
                    projects={projects}
                    setFiltered={setFiltered}
                    activeBtn={activeBtn}
                    setActiveBtn={setActiveBtn}
                />
            </div>
            
            <motion.div 
                layout 
                className="projects mt-[20px]"
            >
                {filtered.map((pro, index) => (
                    <SingleCard title={pro.title} img={pro.img} />
                ))}
            </motion.div>
        </div>
    </div>
  )
}

export default Portfolio