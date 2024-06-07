import {useForm} from 'react-hook-form';

function Register(){


    // const {register, handleSubmit,formState:{errors}} = useForm();
    const {register, handleSubmit} = useForm();

    // From Submission
    function handleFormSubmit(userObj){
        console.log('userObj: ', userObj);
    }


    return (
      <div>
        <h1 className="text-center text-info display-3">Register</h1>
        <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
            {/* Username */}
            <div className="mt-2">
                <label htmlFor="username" className="form-lable">Username</label>
                <input type="text" {...register('username')} id="username" className="form-control"/>
            </div>
            {/* Email */}
            <div className="mt-3">
                <label htmlFor="email" className="form-lable">Email</label>
                <input type="email" id="email" {...register('email')} className="form-control"/>
            </div>
            {/* Password */}
            <div className="mt-3">
                <label htmlFor="password" className="form-lable">Password</label>
                <input type="password" id="password" {...register('password')} className="form-control"/>
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