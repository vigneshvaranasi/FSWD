import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Userlist from './Userlist';
function Adduser() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  let [users, setUsers] = useState([]);

  // From Submission
  function handleFormSubmit(userObj) {
    console.log('userObj: ', userObj);
    setUsers([...users, userObj]);
  }
  return (
    <div>
      <h1 className="text-center mt-4">Assignment 28</h1>
      <h2 className='mt-5 text-center'>User Register</h2>
      <form className="w-50 mx-auto mt-3" onSubmit={handleSubmit(handleFormSubmit)}>
        {/* Username */}
        <div className="mt-2">
          <label htmlFor="username" className="form-lable">Username</label>
          <input type="text" {...register('username', { required: true, minLength: 4, maxLength: 8 })} id="username" className="form-control mt-1" />
        </div>
        {errors.username?.type == 'required' && <p className="text-danger">Username is required</p>}
        {errors.username?.type == 'minLength' && <p className="text-danger">Min Length Should be 4 Characters</p>}
        {errors.username?.type == 'maxLength' && <p className="text-danger">Max Length Should be 8 Characters</p>}
        {/* DOB */}
        <div className="mt-3">
          <label htmlFor="dob" className="form-lable">Date Of Birth</label>
          <input type="date" {...register('dob', { required: true })} id="dob" className="form-control mt-1" />
        </div>
        {errors.dob?.type == 'required' && <p className="text-danger">Date of Birth is required</p>}
        {/* City */}
        <div className="mt-3">
          <label htmlFor="city" className="form-lable">City</label>
          <input type="text" {...register('city', { required: true })} id="city" className="form-control mt-1" />
          {errors.city?.type == 'required' && <p className="text-danger">City is required</p>}

        </div>
        {/* Submit */}
        <div>
          <button type="submit" className="btn btn-primary mt-3">Register</button>
        </div>
      </form>
      <Userlist users={users} />
    </div>
  )
}
export default Adduser;