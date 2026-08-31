import { useState } from "react"

function TaskList() {
  
  const [tasks,setTasks] = useState([
    {id:1, name:'Learn React', isCompleted:true},
    {id:1, name:'Learn AI MCP', isCompleted:true},
    {id:1, name:'Learn AI Node', isCompleted:false},
  ])

  const [taskTitle,setTaskTitle] = useState('')


  function onComplete(id){
    setTasks(
      tasks.map(task => 
        task.id == id 
        ? {...task, isCompleted:true} 
        : task
      )
    )
  }


    return (
      <>
      <h1>Task Manager</h1>

      {/* Add Task */}

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={taskTitle}
          onChange={(e)=> setTaskTitle(e.target.value) }
        />
      </form>


      <ul>
        {tasks.map(task => (
          <li key={task.id} >  {task.name} : {(task.isCompleted)?'✅️':<button onClick={()=> onComplete(task.id)} >Make It Commplete</button>}  </li>
        ))}
      </ul>
      </>
    )
  }
  
  export default TaskList