import AddTask from "./Tasks/AddTask";
import TasksCount from "./Tasks/TasksCount";
import TasksLists from "./Tasks/TasksLists";
import React, { useState } from 'react'

function App(){
  let [tasks,setTasks] = useState([])

  function setTask(task){
    setTasks([...tasks,task])
  }
  return(
      <div>
        <h1 className="display-3 text-center m-5">To Do App</h1>
        <AddTask data={{tasks,setTask}}/>
        <TasksCount tasks={tasks}/>
        <TasksLists tasks={tasks}/>
      </div>
  )
}
export default App;