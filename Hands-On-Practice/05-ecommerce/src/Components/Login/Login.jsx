import React, { useContext } from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { userLoginContext } from '../../Contexts/userLoginContext';

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { currentUser, handleLogin } = useContext(userLoginContext);

  const onSubmit = async (formData) => {
    try {
      await handleLogin(formData);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // Render only if currentUser is not available
  // if (currentUser.username) {
  //   return (
  //     <div className='text-center m-4'>
  //       <h1>You are already logged in as {currentUser.username}</h1>
  //       <button className='btn btn-primary' onClick={() => navigate('/')}>Go to Home</button>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1 className='text-center m-4'>Login</h1>
      <div className='row'>
        <div className='col-11 col-md-6 mx-auto'>
          <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>
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
