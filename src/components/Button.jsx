import React from 'react'

import styles from '../style';

const Button = ({text, style}) => {
  return (
    <a href="#portfolio">
      <button type='button' className={`${style} xxs:mx-auto w-[200px] h-[60px] bg-main font-poppins font-medium text-[18px] rounded-[10px] text-text1 outline-none`}>
        <span className='text-white'>{text}</span>
      </button>
    </a>
    
  )
}

export default Button