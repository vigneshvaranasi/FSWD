import { useState } from "react";
import Child from "./Child";

function Parent(){

    // Counter
    let [counter,setCounter] = useState(0);

    let [data,setData] = useState(0);

    function changeCounter(){
        setCounter(counter+1);
    }

    function getDataFromChild(childData) {
        console.log(childData);
        setData(childData); // Update the parent state with data from the child
    }


    return(
        <div className="card w-75 mx-auto mt-2 text-center">
            <h1 className="m-3">Parent</h1>
            <h2>Counter: {counter}</h2>
            <h2>Child Data: {data}</h2>
            <div>
                <button className="btn btn-primary w-25" onClick={changeCounter}>+</button>
            </div>
            <Child data={{counter,changeCounter,getDataFromChild}}/>
        </div>
    )
}
export default Parent;