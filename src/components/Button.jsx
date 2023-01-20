import React from 'react'

import styles from '../style';

const Button = ({text, style}) => {
  return (
    <button type='button' className={`w-[200px] h-[60px] bg-main font-poppins font-medium text-[18px] rounded-[10px] text-text1 outline-none ${style}`}>
      <span className='text-white'>{text}</span>
    </button>
  )
}

export default Button