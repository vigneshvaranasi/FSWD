import React from 'react'
import './App.css'
import { motion } from 'motion/react'

function App () {
  return (
    <div>
      <motion.h1
        initial={{
          y: 0
        }}
        animate={{
          y: 20
        }}
        transition={{
          duration: 3
        }}
      >
        This is Framer Motion
      </motion.h1>
      {/* <motion.div 
      className='box'
      animate={{
        x: 900,
        rotate: 360,
      }}
      transition={{
        duration: 3,
        delay:1,
        repeat:Infinity,
        ease:'anticipate'

      }}
      >
      </motion.div> */}
      {/* <motion.div 
      className='circle'
      animate={{
        x: 750,
      }}
      >
      </motion.div> */}

      <motion.div
        className='box'
        animate={{
          x: [0, 200, 200, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate: [0, 0, 360, 360, 0]
        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
          ease: 'anticipate'
        }}
      ></motion.div>
    </div>
  )
}

export default App
