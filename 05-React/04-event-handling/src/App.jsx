import './App.css';
function App(){

  // Event Handling
  function handleClickNonParameterized(){
    console.log('Button Clicked');
  }
  function handleClickParameterized(n){
    console.log('Button Clicked The Number is: ' + n);
  }

  return(
    <>
      <h1>Event Handling</h1>
      <button onClick={handleClickNonParameterized}>Click Here - Non Parameterized Function</button>
      <button onClick={()=>{handleClickParameterized(9)}}>Click Here - Parameterized Function</button>
    </>
  );

}

export default App;