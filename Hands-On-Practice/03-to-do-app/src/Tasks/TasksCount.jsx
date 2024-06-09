import React from 'react'

function TasksCount(props) {
  return (
    <div>
        <h1 className='m-5'>Number of Tasks - {props.tasks.length}</h1>
    </div>
  )
}

export default TasksCount