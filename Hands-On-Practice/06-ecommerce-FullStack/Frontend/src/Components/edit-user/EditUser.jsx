import React, { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { userLoginContext } from '../../Contexts/userLoginContext';
import toast from 'react-hot-toast';

function EditUser() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const { currentUser, setCurrentUser } = useContext(userLoginContext);
    const navigate = useNavigate();
    const [error, setError] = useState();

    useEffect(() => {
        // Set default values for the form fields
        setValue('username', currentUser.username);
        setValue('email', currentUser.email);
        setValue('password', currentUser.password);
        setValue('mobile', currentUser.mobile);
        setValue('profile', currentUser.profile);
    }, [currentUser, setValue]);

    async function OnProfileUpdate(updatedDetails) {

        // in updatedDetails we have all the updated values & currentUser has the old values
        const updatePayload = { oldUsername: currentUser.username, ...updatedDetails };

        let res = await fetch('https://ecommerce-backend-fswd.vercel.app/user-api/users', {
            // let res = await fetch('http://localhost:4000/user-api/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(updatePayload)
        });
        res = await res.json();
        console.log('res: ', res);
        if (res.message === "User Updated") {
            // Update the currentUser with the updated details
            setCurrentUser({ ...currentUser, ...updatedDetails });
            toast.success('Profile Updated Successfully', {
                style: {
                    marginTop: '-10px',
                    marginBottom: '10px',
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
                iconTheme: {
                    primary: '#fff',
                    secondary: '#333',
                },
                icon: '🎉',
            });
            navigate('/');
        } else {
            setError(res.message);
        }
    }

    return (
        <div>
            <h1 className='text-center mt-3'>Edit User Profile</h1>
            <div className='row'>
                <div className='col-11 col-md-6 mx-auto'>
                    {error && <p className='alert alert-danger'>{error}</p>}
                    <form className='mx-auto' onSubmit={handleSubmit(OnProfileUpdate)}>
                        <div className='mb-3'>
                            <label htmlFor="username" className='form-label'>Username</label>
                            <input type="text" className='form-control' {...register('username', { required: true })} id='username' placeholder='Enter username' />
                            {errors.username && <p className='text-danger'>Username is required</p>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="email" className='form-control' {...register('email', { required: true })} id='email' placeholder='Enter email' />
                            {errors.email && <p className='text-danger'>Email is required</p>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password" className='form-label'>Password</label>
                            <input type="password" className='form-control' {...register('password', { required: true })} id='password' placeholder='Enter password' disabled />
                            {errors.password && <p className='text-danger'>Password is required</p>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="mobile" className='form-label'>Mobile Number</label>
                            <input type="number" className='form-control' id='mobile' {...register('mobile', { required: true, minLength: 10 })} placeholder='Enter mobile number' />
                            {errors.mobile && errors.mobile.type === 'required' && <p className='text-danger'>Mobile Number is required</p>}
                            {errors.mobile && errors.mobile.type === 'minLength' && <p className='text-danger'>Mobile Number Should be of 10 Digits</p>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="profile" className='form-label'>Profile Image</label>
                            <input type="text" className='form-control' id='profile' {...register('profile', { required: true })} placeholder='Link of the profile image' disabled />
                            {errors.profile && <p className='text-danger'>Image Link is required</p>}
                        </div>
                        <div className='mb-3'>
                            <button type='submit' className='btn btn-primary'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditUser;
