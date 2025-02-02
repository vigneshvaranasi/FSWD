import React from 'react'
import { motion } from 'motion/react'
import './App.css'

function App () {
  return (
    <div>
      <h1>Framer Motion Drag</h1>
      <motion.div
        className='box'
        drag
        whileHover={{
          scale: 1.2
        }}
        whileDrag={{
          scale: 1.2
        }}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 200,
          bottom: 200
        }}
        dragDirectionLock={true}
      ></motion.div>
    </div>
  )
}

export default App
