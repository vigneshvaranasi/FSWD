import React from 'react';
import { useForm } from 'react-hook-form';

function AddTask(props) {

    let { register, handleSubmit } = useForm();

    function onNewTask(data){
        props.data.setTask([data.newtask])
    }

    return (
        <div className="mt-5 w-75 mx-auto">
            <form onSubmit={handleSubmit(onNewTask)}>
                <input
                    type="text"
                    className="form-control"
                    {...register('newtask', { required: true })}
                    id="task"
                    placeholder="Enter a task"
                />
                <div className="mt-3 text-center">
                    <button className="btn btn-primary" type="submit">
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddTask;
