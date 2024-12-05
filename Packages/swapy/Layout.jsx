import { useEffect } from 'react'
import { createSwapy } from 'swapy'

function A() {
    return (
        <div className='child' data-swapy-item="a">
            <h1>A</h1>
        </div>
    )
}

function B() {
    return (
        <div className='child' data-swapy-item="b">
            <h1>B</h1>
        </div>
    )
}

function C() {
    return (
        <div className='child' data-swapy-item="c">
            <h1>C</h1>
        </div>
    )
}

function D() {
    return (
        <div className='child' data-swapy-item="d">
            <h1>D</h1>
        </div>
    )
}

function Layout() {
    useEffect(() => {
        const layout = document.querySelector('.layout')

        if (layout) {
            const swapy = createSwapy(layout, {
                animation: 'dynamic' // or spring or none
            })

            swapy.enable(true)

            return () => {
                swapy.enable(false)
            }
        }
    }, [])

    return (
        <div className='layout'>
            <div className='box1' data-swapy-slot="1">
                <A />
            </div>
            <div className='box2' data-swapy-slot="2">
                <B />
            </div>
            <div className='box3' data-swapy-slot="3">
                <C />
            </div>
            <div className='box4' data-swapy-slot="4">
                <D />
            </div>
        </div>
    )
}

export default Layout
