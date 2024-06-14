import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

function Prompt(props) {
    const [userInput, setUserInput] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const API_KEY = props.data;
    console.log('API_KEY: ', API_KEY);

    if (!API_KEY) {
        console.error("API key is missing!");
        return <div>Error: API key is missing!</div>;
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    async function run() {
        try {
            const result = await model.generateContent(userInput);
            const response = result.response;
            const text = await response.text();
            setResult(text);
        } catch (err) {
            console.error(err);
            setError("An error occurred while generating the content.");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        run();
    };

    return (
        <div>
            <h1>Enter your Prompt Here</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={userInput} 
                    onChange={(e) => setUserInput(e.target.value)} 
                    placeholder="Enter your prompt" 
                />
                <br />
                <button className='btn btn-primary m-2' type="submit">Submit</button>
            </form>
            <div>
                <h2>Result:</h2>
                <p>{result}</p>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
}

export default Prompt;
