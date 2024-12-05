import { useEffect } from 'react'
import { createSwapy } from 'swapy'

function A() {
  return (
    <div className='box' data-swapy-item="a">
      <h1>A</h1>
    </div>
  )
}

function B() {
  return (
    <div className='box' data-swapy-item="b">
      <h1>B</h1>
    </div>
  )
}

function C() {
  return (
    <div className='box' data-swapy-item="c">
      <h1>C</h1>
    </div>
  )
}

function D() {
  return (
    <div className='box' data-swapy-item="d">
      <h1>D</h1>
    </div>
  )
}

function App() {
  useEffect(() => {
    const container = document.querySelector('.container')

    if (container) {
      const swapy = createSwapy(container, {
        animation: 'dynamic' // or spring or none
      })

      swapy.enable(true)

      return () => {
        swapy.enable(false)
      }
    }
  }, [])

  return (

    <div>
      <h1>Swapy</h1>
      <div className='container'>
        <div data-swapy-slot="1">
          <A />
        </div>
        <div data-swapy-slot="2">
          <B />
        </div>
        <div data-swapy-slot="3">
          <C />
        </div>
        <div data-swapy-slot="4">
          <D />
        </div>
      </div>
    </div>
  )
}

export default App
