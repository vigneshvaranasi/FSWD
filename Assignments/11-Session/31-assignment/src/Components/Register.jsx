import React from 'react'
import { useForm } from 'react-hook-form'

function Register() {
    let { register, handleSubmit, formState: { errors } } = useForm()
    function handleFormSubmit(data) {
        console.log(data)
    }
    return (
        <div>
            <h3 className='text-center '>Registration Form</h3>
            <form onSubmit={handleSubmit(handleFormSubmit)} className='m-3 mt-4'>
                <div className='row justify-content-center'>
                    {/* First Name */}
                    <div className="mt-2 col-5">
                        <label htmlFor="firstName" className="form-lable">First Name</label>
                        <input type="text" {...register('firstName', { required: true, maxLength: 6, minLength: 4 })} id="firstName" className="form-control" />
                        {errors.firstName?.type === 'required' && <p className="text-danger">First Name is required</p>}
                        {errors.firstName?.type === 'minLength' && <p className="text-danger">Min Lenght Should be 4</p>}
                        {errors.firstName?.type === 'maxLength' && <p className="text-danger">Max Lenght Should be 6</p>}
                    </div>
                    {/* Last Name */}
                    <div className="mt-2 col-5">
                        <label htmlFor="lastName" className="form-lable">Last Name</label>
                        <input type="text" {...register('lastName', { required: true, maxLength: 6, minLength: 4 })} id="lastName" className="form-control" />
                        {errors.lastName?.type === 'required' && <p className="text-danger">Last Name is required</p>}
                        {errors.lastName?.type === 'minLength' && <p className="text-danger">Min Lenght Should be 4</p>}
                        {errors.lastName?.type === 'maxLength' && <p className="text-danger">Max Lenght Should be 6</p>}
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {/* Birthday */}
                    <div className="mt-2 col-5">
                        <label htmlFor="birthday" className="form-lable">Birthday</label>
                        <input type="date" {...register('birthday', { required: true })} id="birthday" className="form-control" />
                        {errors.birthday && <p className="text-danger">Birthday is required</p>}
                    </div>
                    {/* Gender */}
                    <div className="mt-2 col-5">
                        <label className="form-lable mb-2">Gender</label> <br />
                        <input type="radio" {...register('gender', { required: true })} id="genderMale" className="form-check-input" />
                        <label htmlFor="genderMale" className="form-check-label">Male</label>
                        <input type="radio" {...register('gender', { required: true })} id="genderFemale" className="form-check-input ms-2" />
                        <label htmlFor="genderFemale" className="form-check-label">Female</label>
                        {errors.gender && <p className="text-danger">Gender is required</p>}
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {/* Email */}
                    <div className="mt-2 col-5">
                        <label htmlFor="email" className="form-lable">Email</label>
                        <input type="text" {...register('email', { required: true })} id="email" className="form-control" />
                        {errors.email?.type === 'required' && <p className="text-danger">Email is required</p>}
                    </div>
                    {/* Phone Number */}
                    <div className="mt-2 col-5">
                        <label htmlFor="phone" className="form-lable">Phone Number</label>
                        <input type="number" {...register('phone', { required: true, maxLength: 10, minLength: 10 })} id="phone" className="form-control" />
                        {errors.phone?.type === 'required' && <p className="text-danger">Phone Number is required</p>}
                        {errors.phone?.type === 'maxLength' && <p className="text-danger">Phone Number Should be of 10 digits</p>}
                        {errors.phone?.type === 'minLength' && <p className="text-danger">Phone Number Should be of 10 digits</p>}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className='col-10'>
                        <label htmlFor="subject" className="form-label">Subject: </label>
                        <select class="form-select" id='subject' name='subject' {...register('subject', { required: true})}>
                            <option value='maths' >Maths</option>
                            <option value="physics">Physics</option>
                            <option value="chemistry">Chemistry</option>
                        </select>
                    </div>
                </div>
                {/* Submit */}
                <div className='row justify-content-center'>
                    <button type="submit" className="btn btn-primary mt-2 col-4">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register