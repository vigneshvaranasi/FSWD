import reactLogo from './assets/react.svg'
import { sampleContext } from './Contexts/testContext';
import { useContext } from 'react';

import { usersContext } from './Contexts/usersContext';
function Home() {
    let { A, setA} = useContext(sampleContext);
    let { users,setUsers } = useContext(usersContext);

    return (
        <div className="p-5">
            <h1 className='text-center'>Context Demonstration</h1>
            <div className='text-center p-5'>
            <h1>{A}</h1>
            <button onClick={()=>setA(A+1)} className='btn btn-primary'>Change A</button>
            <h1>Total Users are {users.length}</h1>
                <br />
                <img src={reactLogo} width={200} className='m-3' alt="" />
            </div>
        </div>
    )
}

export default Home;