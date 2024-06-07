import { useEffect } from 'react';
import './Test.css';
function Test() {

    return (
        useEffect(() => { 
            console.log('Test Component Mounted') 
        }, []),

        function increment() {
            let counter = document.querySelector('.counter span');
            let count = parseInt(counter.textContent);
            counter.textContent = count + 1;
        },

        <>
            <h1>Counter</h1>
            <button onClick={increment}>Increment</button>
        </>
    );

}

export default Test;