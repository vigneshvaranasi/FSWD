import reactLogo from './assets/react.svg'
import { sampleContext } from './Contexts/testContext';
import { useContext } from 'react';

function Home() {
    let num = useContext(sampleContext);
    (sampleContext);
    return (
        <div className="p-5">
            <h1 className='text-center'>Login Demonstration</h1>
            <div className='text-center p-5'>
            <h1>{num.A}</h1>
                <img src={reactLogo} width={200} alt="" />
            </div>
        </div>
    )
}

export default Home;