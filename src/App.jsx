import React from 'react'

import styles from './style'
import {Navbar, Hero} from './components'

const App = () => {
  return (
    <div className={`bg-blue-gradient bg-white w-full overflow-hidden ${styles.flexCenter} `}>
      <div className={`bg-white rounded-[30px] w-5/6 shadow-2xl h-[800px] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 ${styles.paddingX} mt-20`}>
        <Navbar />
        <Hero />
      </div>
      
    </div>
    
  )
}

export default App