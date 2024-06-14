import React, { useState } from "react";
import { sampleContext } from "./testContext";

function Store({ children }) { // Accept children as props

    const [A, setA] = useState(10);

    return (
        <sampleContext.Provider value={{ A, setA }}>
            {children}
        </sampleContext.Provider>
    );
}

export default Store;
