import './App.css';
function App(){

  let number = [1,2,3,4,5,6,7,8,9,10]
  return(
    <>
      <h1>Conditional Rendering</h1>
      <h2>Display only Even Number using Conditional Rendering</h2>
      {
        number.map((num, index) => (
          num % 2 ==0 ? <h3 key={index}>{num}</h3>: <h3 key={index}>{null}</h3>
        ))
      }
      <h2>Display if the number is Even or Odd</h2>
      {
        number.map((num, index) => (
          num % 2 ==0 ? <h3 key={index}>{num} - Even</h3>: <h3 key={index}>{num} - Odd</h3>
        ))
      }
    </>
  );

}

export default App;