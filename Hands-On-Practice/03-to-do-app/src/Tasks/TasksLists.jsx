import React from 'react';

function TasksLists({ tasks }) {
  return (
    <div className='m-5'>
      <h1 className='display-6'>List of Tasks</h1>
      <table className='table'>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Task</th>
            </tr>
        </thead>
        <tbody>
            {
                tasks.map((task,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{task}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  );
}

export default TasksLists;
