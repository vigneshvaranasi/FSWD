import './App.css';
import Child1 from './Child';
import logoReact from './assets/react.svg'
import logoVite from './assets/vite.svg'
function App(){
let person1 = {name:"Vignesh", age:18, role:"Developer", image:logoReact};
let person2 = {name:"Pavan", age:20, role:"Developer", image:logoVite};
let person3 = {name:"Fakruddin", age:22, role:"Tester" , image:logoVite};
let person4 = {name:"Eswar", age:24, role:"Designer", image:logoReact};
  return(
    <>
      <h1 className='head'>Props</h1>
      <div className='container'>
        <Child1 person={person1}/>
        <Child1 person={person2}/>     
        <Child1 person={person3}/>
        <Child1 person={person4}/> 
      </div>
    </>
  );

}
export default App;