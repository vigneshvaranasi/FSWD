import { useForm } from 'react-hook-form';
import Home from './Home';
import { useState } from 'react';
import Users from './Users';

function Register() {


    // const {register, handleSubmit,formState:{errors}} = useForm();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isRegistered, setIsRegistered] = useState(false);

    // From Submission
    async function handleFormSubmit(userObj) {
        console.log('userObj: ', userObj);

        // Post Request
        let res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
        console.log('res: ', res);

        // If user is registered successfully then redirect to Home Page
        if(res.status === 201){
            setIsRegistered(true);
        }

    }
    if(isRegistered){
        // Render Users Component
        return <Users/>
        // Render Home Component
        // return <Home/>
    }
    
    return (
        <div>
            <h1 className="text-center text-info display-3">Register</h1>
            <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
                {/* Username */}
                <div className="mt-2">
                    <label htmlFor="username" className="form-lable">Username</label>
                    <input type="text" {...register('username', { required: true, maxLength: 8, minLength: 4 })} id="username" className="form-control" />
                    {errors.username?.type === 'required' && <p className="text-danger">Username is required</p>}
                    {errors.username?.type === 'minLength' && <p className="text-danger">Min Lenght Should be 4</p>}
                    {errors.username?.type === 'maxLength' && <p className="text-danger">Max Lenght Should be 8</p>}
                </div>
                {/* Email */}
                <div className="mt-3">
                    <label htmlFor="email" className="form-lable">Email</label>
                    <input type="email" id="email" {...register('email', { required: true })} className="form-control" />
                    {errors.email?.type === 'required' && <p className="text-danger">Email is required</p>}
                </div>
                {/* Password */}
                <div className="mt-3">
                    <label htmlFor="password" className="form-lable">Password</label>
                    <input type="password" id="password" {...register('password', { required: true })} className="form-control" />
                    {errors.password?.type === 'required' && <p className="text-danger">Password is required</p>}
                </div>
                {/* Submit */}
                <div>
                    <button type="submit" className="btn btn-primary mt-3">Register</button>
                </div>

            </form>
        </div>
    )
}

export default Register;