import React from 'react'

import styles from '../style'

const Filter = () => {
  return (
    <div className='filter-container w-full flex flex-row justify-center '>
        <button type='button' focused className={`${styles.glassButton} font-poppins font-semibold text-text1 `}>
            ALL
        </button>
        <button type='button' focused className={`${styles.glassButton} font-poppins font-semibold text-text1 `}>
            APPS
        </button>
        <button type='button' focused className={`${styles.glassButton} font-poppins font-semibold text-text1 `}>
            WEBSITES
        </button>
    </div>
  )
}

export default Filter