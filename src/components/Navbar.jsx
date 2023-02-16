import React from 'react'

import { useState } from 'react';

import { close, menu } from '../assets';

import { navLinks, links } from '../constants';

import styles from '../style';

const Navbar = () => {
  
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={` ${styles.paddingX} w-full flex xs:mt-[10px] md:mt-[50px] justify-between items-center navbar`}>

      <div>
        <p className='font-poppins font-bold cursor-pointer text-[30px]'>
          <span className=' text-text1'>ŁG</span>
        </p>
        
      </div>
  

      <ul className='list-none sm:flex hidden justify-end items-start flex-1  '>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-text1 uppercase mr-10`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        {links.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-text1 uppercase ${index === links.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={nav.link} target='_blank' >
              <img src={nav.icon} className='w-[20px]' alt="" />
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} 
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle((prev) => !prev)}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 ${styles.glassContainer2} absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-text1 ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

      </div>


    </nav>
  )
}

export default Navbar