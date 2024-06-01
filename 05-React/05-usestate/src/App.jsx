import { useState } from 'react';
import './App.css';
function App(){
  // State Variable
  let [counter, setCount] = useState(0);
  let [name, setPerson] = useState({username:"Vignesh",age:"18",role:"Developer"});
  let [skills,setSkill]=useState(['HTML','CSS','JS'])
  function increment(){
    setCount(counter + 1);
  }
  function decrement(){
    setCount(counter - 1);
  }
  function reset(){
    setCount(0);
  }
  function changeName(){
    setPerson({...name,username:"Vignesh Varanasi",role:"Full Stack Developer"});
  }

  function addSkill(){
    // Add React Skill at the End of the Array
    // setSkill([...skills,'React']);

    // Add React Skill at the Start of the Array
    // setSkill(['React',...skills]);

    // Add NodeJS Skill at the Middle of the Array
    let arrCopy = [...skills];
    arrCopy.splice(1,0,'NodeJS');
    setSkill(arrCopy);

  }
  return(
    <>
      <h1 className='head'>useState Hook</h1>
      <h2>Counter Example</h2>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h2>Object Example</h2>
      <h1>{name.username}</h1>
      <h1>{name.age}</h1>
      <h1>{name.role}</h1>
      <button onClick={changeName}>Change Name & Role</button>
      

      <h2>Array Example</h2>
      <ul>
        {skills.map((skill,index)=><li key={index}>{skill}</li>)}
      </ul>
      <button onClick={addSkill}>Add New Skill</button>
    </>
  );

}

export default App;