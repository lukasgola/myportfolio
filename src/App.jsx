import React from 'react'

import styles from './style'
import {Navbar, Hero, Skills, Portfolio} from './components'

const App = () => {
  return (
    <div className={` background-gradient2 flex w-full overflow-hidden flex-col ${styles.flexCenter} `}>
      <div className={`${styles.glassContainer} ${styles.paddingX} w-2/3 min-h-[600px] mt-20 mb-20`}>
        <Navbar />
        <Hero />
      </div>
      <div className={`${styles.glassContainer} w-2/3 mt-20`}>
        <Portfolio />
      </div>
    </div>
    
  )
}

export default App