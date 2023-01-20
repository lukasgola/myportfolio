import React from 'react'

import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  )
}

export default App