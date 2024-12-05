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
function E() {
    return (
        <div className='child' data-swapy-item="e">
            <h1>E</h1>
        </div>
    )
}
function F() {
    return (
        <div className='child' data-swapy-item="f">
            <h1>F</h1>
        </div>
    )
}
function G() {
    return (
        <div className='child' data-swapy-item="g">
            <h1>G</h1>
        </div>
    )
}
function H() {
    return (
        <div className='child' data-swapy-item="h">
            <h1>H</h1>
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
            <div data-swapy-slot="5">
                <E />
            </div>
            <div data-swapy-slot="6">
                <F />
            </div>
            <div data-swapy-slot="7">
                <G />
            </div>
            <div data-swapy-slot="8">
                <H />
            </div>

        </div>
    )
}

export default Layout
