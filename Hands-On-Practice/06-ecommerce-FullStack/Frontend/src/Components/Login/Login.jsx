import React, { useContext, useEffect } from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { userLoginContext } from '../../Contexts/userLoginContext';


function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { handleLogin, userLoginStatus, err } = useContext(userLoginContext);

  // Function to handle login
  function onLogin(userDetails) {
    handleLogin(userDetails);
  }

  useEffect(() => {
    if (userLoginStatus == true) {
      // navigate('/user-profile')
      navigate("/")
    }
  }, [userLoginStatus])


  return (
    <div>
      <h1 className='text-center m-4'>Login</h1>
      <div className='row'>
        <div className='col-11 col-md-6 mx-auto'>
          {
            err && <div className='alert alert-danger'>{err}</div>
          }
          <form className='mx-auto' onSubmit={handleSubmit(onLogin)}>
            <div className='mb-3'>
              <label htmlFor="username" className='form-label'>Username</label>
              <input type="text" className='form-control' {...register('username', { required: true })} id='username' placeholder='Enter username' />
              {errors.username && <p className='text-danger'>Username is required</p>}
            </div>
            <div className='mb-3'>
              <label htmlFor="password" className='form-label'>Password</label>
              <input type="password" className='form-control' {...register('password', { required: true })} id='password' placeholder='Enter password' />
              {errors.password && <p className='text-danger'>Password is required</p>}
            </div>
            <div className='mb-3'>
              <button type='submit' className='btn btn-primary'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
