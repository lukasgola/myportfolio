import React from 'react'

import styles from '../style';
import Button from './Button';

import { desk } from '../assets';

const Hero = () => {
  return (
    <section id='home' className={`flex h-[600px] mt-[50px]`}>
      <div className={`flex-1 ${styles.flexCenter} md:max-h-[600px`}>
        <div className="flex flex-1 xs:justify-center items-center">
          <div className={`${styles.paddingX} ${styles.paddingY} flex flex-col xs:items-start xs:w-1/1 sm:w-2/3 md:w-1/2`}>
            <h1 className="flex-1 font-poppins font-semibold xs:text-[32px] sm:text-[52px] md:text-[72px]  text-text1">Łukasz
            <br className="xs:block hidden" /> {" "}
            <span className="text-text1 ">Gola</span>
            </h1>
            <br className="xs:block hidden" /> {" "}
            <p className='font-poppins xs:mt-[20xp] text-slate-500 w-2/3'>
              <span>Hello, I'm Łukasz Gola, student of the POLSL interested in Mobile App Development.</span>
            </p>
            <Button style='xs:mt-[20px] uppercase' text='Portfolio' />
          </div>
          <div className='sm:pr-[50px]'>
            <img src={desk} alt="" className='xs:h-0 sm:h-[300px] ' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero