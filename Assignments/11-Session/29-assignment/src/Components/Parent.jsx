import React, { useState } from 'react'
import Child from './Child'

function Parent() {

    let [counter,setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }
    function decrement() {
        setCounter(counter - 1)
    }


    return (
        <div className='card m-5 text-center w-75 mx-auto'>
            <h1 className='m-3'>Parent</h1>
            <h1>Counter : {counter}</h1>
            <Child data={{increment,decrement}} />
        </div>
    )
}

export default Parent