import React, { useEffect } from 'react'

import styles from '../style';

import { category } from '../constants';

const Filter = ({projects, setFiltered, activeBtn, setActiveBtn}) => {


  useEffect(() => {
    if(activeBtn === 'all'){
      setFiltered(projects);
      return;
    }

    const filtered = projects.filter((project) => project.type.includes(activeBtn));
    setFiltered(filtered);

  }, [activeBtn])

  return (
    <div className='filter-container w-full flex justify-center'>
      {category.map((cat, index) => (
          <button  
            className={` ${styles.glassButton} h-[40px] mx-[10px] font-poppins font-semibold text-text1 ${activeBtn === cat.type ? "active bg-main bg-opacity-100" : "bg-white"}`}
            onClick={() => setActiveBtn(cat.type)}
          >
            {cat.title}
          </button>
      ))}
    </div>
  )
}

export default Filter