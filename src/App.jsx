import React from 'react'

import styles from './style'
import {Navbar, Hero, Portfolio} from './components'

const App = () => {
  return (
    <div className={` background-gradient flex w-full overflow-hidden flex-col ${styles.flexCenter} `}>
      <div className={`${styles.glassContainer} ${styles.paddingX} w-2/3 min-h-[800px] mt-[80px]`}>
        <Navbar />
        <Hero />
      </div>
      <div className={`${styles.glassContainer} pb-[50px] w-2/3 my-[80px]`}>
        <Portfolio />
      </div>
    </div>
    
  )
}

export default App