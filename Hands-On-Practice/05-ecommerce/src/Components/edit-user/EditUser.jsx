import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { userLoginContext } from '../../Contexts/userLoginContext'


function EditUser() {
    const { register, handleSubmit, formState: { errors },setValue } = useForm();
    let { currentUser,setCurrentUser } = useContext(userLoginContext)
    let navigate = useNavigate();
    // errors State
    let [error, setError] = useState();

    async function OnProfileUpdate(updatedDetails){
        console.log('updatedDetails: ', updatedDetails);
        // let res = await fetch(`http://localhost:4000/users/${currentUser.id}`, {
        let res = await fetch(`https://user-api-6z6q.onrender.com/users/${currentUser.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedDetails)
        })
        console.log('res: ', res);
        updatedDetails.id = currentUser.id
        setCurrentUser(updatedDetails)
        if(res.status === 200){
            navigate('/')
        }
        
    }

    return (
        <div>
            <h1 className='text-center mt-3'>Edit User Profile</h1>
            <div className='row'>
                <div className='col-11 col-md-6 mx-auto'>
                    {/* Other Error Messages */}
                    {error && <p className='alert alert-danger'>{error}</p>}
                    {/* Registration Form */}
                    <form className=' mx-auto' onSubmit={handleSubmit(OnProfileUpdate)}>
                        {/* Username */}
                        <div className='mb-3'>
                            <label htmlFor="username" className='form-lable'>Username</label>
                            <input type="text" className='form-control' {...register('username', { required: true })} value={setValue('username',currentUser.username)}  id='username' placeholder='Enter username' />
                            {errors.username && <p className='text-danger'>Username is required</p>}
                        </div>
                        {/* Email */}
                        <div className='mb-3'>
                            <label htmlFor="email" className='form-lable'>Email</label>
                            <input type="email" className='form-control' {...register('email', { required: true })} value={setValue('email',currentUser.email)} id='email' placeholder='Enter email' />
                            {errors.email && <p className='text-danger'>Email is required</p>}
                        </div>
                        {/* Password */}
                        <div className='mb-3'>
                            <label htmlFor="password" className='form-lable'>Password</label>
                            <input type="password" className='form-control' {...register('password', { required: true })} value={setValue('password',currentUser.password)} disabled id='password' placeholder='Enter password' />
                            {errors.password && <p className='text-danger'>Password is required</p>}
                        </div>
                        {/* Mobile Number */}
                        <div className='mb-3'>
                            <label htmlFor="mobile" className='form-lable'>Mobile Number</label>
                            <input type="number" className='form-control' id='mobile' {...register('mobile', { required: true, minLength: 10 })} value={setValue('mobile',currentUser.mobile)} placeholder='Enter mobile number' />
                            {errors.mobile && errors.mobile.type === 'required' && <p className='text-danger'>Mobile Number is required</p>}
                            {errors.mobile && errors.mobile.type === 'minLength' && <p className='text-danger'>Mobile Number Should be of 10 Digits</p>}
                        </div>
                        {/* Profile Image */}
                        <div className='mb-3'>
                            <label htmlFor="profile" className='form-lable'>Profile Image</label>
                            <input type="text" className='form-control' id='profile' {...register('profile', { required: true })} value={setValue('profile',currentUser.profile)} disabled placeholder='Link of the profile image' />
                            {errors.profile && <p className='text-danger'>Image Link is required</p>}
                        </div>
                        {/* Submit Button */}
                        <div className='mb-3'>
                            <button type='submit' className='btn btn-primary'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUser