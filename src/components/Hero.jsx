import React from 'react'

import styles from '../style';
import Button from './Button';

import { desk } from '../assets';

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col h-[600px] mt-[50px]`}>

      <div className={`flex-1 ${styles.flexCenter} flex-col xs:px-0 sm:px-5 px-6`}>
        <div className="flex flex-row items-center w-full justify-around px-[50px] ">
          <div className='flex flex-col md:mr-4 mr-0 w-1/3'>
            <h1 className="flex-1 font-poppins font-semibold sm:text-[72px] text-[52px] text-text1 sm:leading-[72px] leading-[52px]">Łukasz
            <br className="sm:block hidden" /> {" "}
            <span className="text-text1 ">Gola</span>
            </h1>
            <br className="sm:block hidden" /> {" "}
            <p className='font-poppins mt-10 text-slate-500'>
              <span>Hello, I'm Łukasz Gola, student of the POLSL interested in Mobile App Development.</span>
            </p>
            <Button style='mt-10 uppercase' text='Portfolio' />
          </div>
          <div>
            <img src={desk} alt="" className='h-[450px] sm:h-[300px]' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero