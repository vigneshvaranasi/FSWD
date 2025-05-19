import React from 'react'
import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap/all'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(DrawSVGPlugin)
function App () {
  const pathRef = useRef(null)
  const circleRef = useRef(null)

  useEffect(() => {
    const circle = circleRef.current
    const tl1 = gsap.timeline({ repeat: -1, repeatDelay: 0 })
    tl1
      .fromTo(
        circle,
        { drawSVG: '0% 30%' },
        {
          drawSVG: '100% 130%',
          duration: 1.5,
          ease: 'power2.inOut'
        }
      )
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <svg width='100' height='100' viewBox='0 0 200 200'>
        {/* Background Track */}
        <circle
          cx='100'
          cy='100'
          r='80'
          stroke='#888' // Light gray for background track
          strokeWidth='3' // Thicker line for the track
          fill='none'
        />

        {/* Rotating Circle */}
        <circle
          ref={circleRef}
          cx='100'
          cy='100'
          r='80'
          stroke='#ffffff'
          strokeWidth='8'
          fill='none'
          strokeLinecap='round'
        />
      </svg>
    </div>
  )
}

export default App
