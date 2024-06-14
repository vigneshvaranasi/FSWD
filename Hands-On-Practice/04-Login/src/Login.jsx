import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    let [UserCredErr, setUserCredErr] = useState(false);

    // From Submission
    async function onUserLogin(userObj) {
        console.log('userObj: ', userObj);
        // Post Request
        let res = await fetch(`http://localhost:3000/users?username=${userObj.username}&password=${userObj.password}`);
        let userArray = await res.json();

        if (userArray.length === 0) {
            setUserCredErr('Username or Password is Incorrect');
        } 
        else {
            navigate('/user-dashboard', { state: { username: userObj.username } });
        }
    }
    return (
        <div>
            <h1 className="text-center text-info display-3 m-3">Login</h1>
            {UserCredErr && <p className="text-danger text-center">{UserCredErr}</p>}
            <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(onUserLogin)}>
                {/* Username */}
                <div className="mt-2">
                    <label htmlFor="username" className="form-lable">Username</label>
                    <input type="text" {...register('username', { required: true, maxLength: 8, minLength: 4 })} id="username" className="form-control" />
                    {errors.username?.type === 'required' && <p className="text-danger">Username is required</p>}
                    {errors.username?.type === 'minLength' && <p className="text-danger">Min Lenght Should be 4</p>}
                    {errors.username?.type === 'maxLength' && <p className="text-danger">Max Lenght Should be 8</p>}
                </div>
                {/* Password */}
                <div className="mt-3">
                    <label htmlFor="password" className="form-lable">Password</label>
                    <input type="password" id="password" {...register('password', { required: true })} className="form-control" />
                    {errors.password?.type === 'required' && <p className="text-danger">Password is required</p>}
                </div>
                {/* Submit */}
                <div>
                    <button type="submit" className="btn btn-primary mt-3">Login</button>
                </div>

            </form>
        </div>
    )
}

export default Login;