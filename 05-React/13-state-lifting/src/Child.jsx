import { useState } from "react";

function Child({ data: { counter, changeCounter, getDataFromChild } }) {
    const [sampleData, setSampleData] = useState(100);

    return (
        <div className="card m-5">
            <h1 className="mt-2">Child</h1>
            <h2>Counter: {counter}</h2>
            <div>
                <button className="btn btn-primary w-50 m-3" onClick={changeCounter}>+</button>
            </div>
            <div>
                <button className="btn btn-dark w-50 m-1 mb-3" onClick={() => getDataFromChild(sampleData)}>Send Data to Parent</button>
            </div>
        </div>
    );
}

export default Child;
