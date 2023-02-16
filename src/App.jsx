import React, { useState } from 'react'

import styles from './style';
import {Navbar, Hero, Portfolio} from './components';

const App = () => {

  return (
    <div className={` background-gradient flex w-full overflow-hidden flex-col ${styles.flexCenter} `}>
      <div className={`${styles.glassContainer} ${styles.paddingX} ${styles.marginY} min-h-[800px]`}>
        <Navbar />
        <Hero />
      </div>
      <div className={`${styles.glassContainer} ${styles.paddingX} pb-[50px]`}>
        <Portfolio />
      </div>
    </div>
    
  )
}

export default App