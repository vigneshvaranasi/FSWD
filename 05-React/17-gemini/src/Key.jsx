import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Prompt from './Prompt';

function Key() {
    const [key, setKey] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        const storedKey = localStorage.getItem('apiKey');
        if (storedKey) {
            setKey(storedKey);
        }
    }, []);

    const handleFormSubmit = (formData) => {
        const apiKey = formData.api;
        setKey(apiKey);
        localStorage.setItem('apiKey', apiKey);
    };

    const handleRemoveKey = () => {
        setKey('');
        localStorage.removeItem('apiKey');
    };

    return (
        <div className='text-center'>
            {key ? (
                <>
                    <Prompt data={key} />
                    <button className='btn btn-danger m-3' onClick={handleRemoveKey}>Remove API Key</button>
                </>
            ) : (
                <>
                    <h1>Enter your API Key</h1>
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <input type="text" {...register('api', { required: true })} />
                        <br />
                        {errors.api?.type === 'required' && (
                            <span className='text-danger'>API Key is required</span>
                        )}
                        <br />
                        <button className='btn btn-primary m-3' type="submit">Submit</button>
                    </form>
                </>
            )}
        </div>
    );
}

export default Key;
