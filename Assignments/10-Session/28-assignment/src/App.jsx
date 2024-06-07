import { useForm } from 'react-hook-form';
import { useState } from 'react';
function App() {

  const { register, handleSubmit } = useForm();
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
          <input type="text" {...register('username')} id="username" className="form-control mt-1" />
        </div>
        {/* DOB */}
        <div className="mt-3">
          <label htmlFor="dob" className="form-lable">Date Of Birth</label>
          <input type="date" {...register('dob')} id="dob" className="form-control mt-1" />
        </div>
        {/* City */}
        <div className="mt-3">
          <label htmlFor="city" className="form-lable">City</label>
          <input type="text" {...register('city')} id="city" className="form-control mt-1" />
        </div>
        {/* Submit */}
        <div>
          <button type="submit" className="btn btn-primary mt-3">Register</button>
        </div>
      </form>
      <h2 className=' mt-5 text-center'>User List</h2>

      <div className='m-4'>
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Date Of Birth</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.dob}</td>
                    <td>{user.city}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default App;