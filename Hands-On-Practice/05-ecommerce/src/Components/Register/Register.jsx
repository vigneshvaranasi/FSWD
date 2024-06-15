import React, { useState } from 'react'
import './Register.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
function Register() {
  const {register, handleSubmit,formState: { errors }} = useForm();
  let navigate = useNavigate();

  // errors State
  let [error, setError] = useState();

  async function handleFormSubmit(userObj) {
    try{

      console.log('userObj: ', userObj);
      // Post Request
      let res = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
      })
      console.log('res: ', res);
      if(res.status === 201){
        navigate('/login')
      }
    }catch(err){
      setError('Something went wrong try again later!')
    }
}
  return (
    <div>
      <h1 className='text-center m-4'>User Registeration</h1>


      <div className='row'>
        <div className='col-11 col-md-6 mx-auto'>
          {/* Other Error Messages */}
          {error && <p className='alert alert-danger'>{error}</p>}
          {/* Registration Form */}
          <form className=' mx-auto' onSubmit={handleSubmit(handleFormSubmit)}>
            {/* Username */}
            <div className='mb-3'>
              <label htmlFor="username" className='form-lable'>Username</label>
              <input type="text" className='form-control' {...register('username',{required:true})} id='username' placeholder='Enter username' />
              {errors.username && <p className='text-danger'>Username is required</p>}
            </div>
            {/* Email */}
            <div className='mb-3'>
              <label htmlFor="email" className='form-lable'>Email</label>
              <input type="email" className='form-control' {...register('email',{required:true})} id='email' placeholder='Enter email' />
              {errors.email && <p className='text-danger'>Email is required</p>}
            </div>
            {/* Password */}
            <div className='mb-3'>
              <label htmlFor="password" className='form-lable'>Password</label>
              <input type="password" className='form-control' {...register('password',{required:true})} id='password' placeholder='Enter password' />
              {errors.password && <p className='text-danger'>Password is required</p>}
            </div>
            {/* Mobile Number */}
            <div className='mb-3'>
              <label htmlFor="mobile" className='form-lable'>Mobile Number</label>
              <input type="number" className='form-control' id='mobile' {...register('mobile',{required:true,minLength:10})} placeholder='Enter mobile number' />
              {errors.mobile && errors.mobile.type==='required' && <p className='text-danger'>Mobile Number is required</p>}
              {errors.mobile  && errors.mobile.type==='minLength' && <p className='text-danger'>Mobile Number Should be of 10 Digits</p>}
            </div>
            {/* Profile Image */}
            <div className='mb-3'>
              <label htmlFor="profile" className='form-lable'>Profile Image</label>
              <input type="text" className='form-control' id='profile' {...register('profile',{required:true})} placeholder='Link of the profile image' />
              {errors.profile && <p className='text-danger'>Image Link is required</p>}
            </div>
            {/* Submit Button */}
            <div className='mb-3'>
              <button type='submit' className='btn btn-primary'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register