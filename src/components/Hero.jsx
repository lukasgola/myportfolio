import React from 'react'

import styles from '../style';
import { discount, robot, aFrame } from '../assets';
import Button from './Button';

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className='flex flex-row items-center py-[6] bg-discount-gradient px-4 rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className="w-[32px] h-[32]px" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> znizki na {" "}
            <span className='text-white'>1 Miesiąc</span>
          </p>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className='flex flex-col md:mr-4 mr-0 h-full w-1/2'>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">Nowa
            <br className="sm:block hidden" /> {" "}
            <span className="text-gradient">Jakość</span>
            <br className="sm:block hidden" /> {" "}
            Nauczania
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