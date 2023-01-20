import React from 'react'

import styles from './style'
import {Navbar, Hero} from './components'

const App = () => {
  return (
    <div className={`bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-50 to-violet-200 bg-white w-full overflow-hidden ${styles.flexCenter} `}>
      <div className={`${styles.glassContainer} ${styles.paddingX} mt-20`}>
        <Navbar />
        <Hero />
      </div>
      
    </div>
    
  )
}

export default App