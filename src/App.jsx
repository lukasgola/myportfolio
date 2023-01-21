import React from 'react'

import styles from './style'
import {Navbar, Hero, Skills, Portfolio} from './components'

const App = () => {
  return (
    <div className={` ${styles.backgroundGradient} flex w-full overflow-hidden flex-col ${styles.flexCenter} `}>
      <div className={`${styles.glassContainer} ${styles.paddingX} w-2/3 min-h-[600px] mt-20`}>
        <Navbar />
        <Hero />
      </div>
      <div className={`${styles.glassContainer} w-2/3 min-h-[600px] mt-[50px]`}>
        <Skills />
      </div>
      <div className={`${styles.glassContainer} w-2/3 mt-[50px]`}>
        <Portfolio />
      </div>
    </div>
    
  )
}

export default App