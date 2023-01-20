import React from 'react'

const Button = ({text, styles}) => {
  return (
    <button type='button' className={`w-[200px] h-[60px] bg-blue-gradient font-poppins font-medium text-[18px] rounded-[10px] text-primary outline-none ${styles}`}>
      <span>{text}</span>
    </button>
  )
}

export default Button