import React from 'react'

import styles from '../style';
import { discount, robot, aFrame } from '../assets';
import Button from './Button';

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center w-full">
          <div className='flex flex-col md:mr-4 mr-0 h-full w-1/2'>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-slate ss:leading-[72px] leading-[52px]">Łukasz
            <br className="sm:block hidden" /> {" "}
            <span className="text">Gola</span>
            </h1>
            <br className="sm:block hidden" /> {" "}
            <Button styles='mt-10' text='Szukaj teraz' />
          </div>
        </div>
        

      </div>

    </section>
  )
}

export default Hero