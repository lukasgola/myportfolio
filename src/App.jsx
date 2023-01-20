import React from 'react'

import styles from './style'
import {Navbar, Hero, Skills} from './components'

const App = () => {
  return (
    <div className={` ${styles.backgroundGradient} flex w-full overflow-hidden flex-col ${styles.flexCenter} `}>
      <div className={`${styles.glassContainer} ${styles.paddingX} w-5/6 h-[550px] mt-20`}>
        <Navbar />
        <Hero />
      </div>
      <div className={`${styles.glassContainer} w-5/6 mt-[50px]`}>
        <Skills />
      </div>
      
    </div>
    
  )
}

export default App