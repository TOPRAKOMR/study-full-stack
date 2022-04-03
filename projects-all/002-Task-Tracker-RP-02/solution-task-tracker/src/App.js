import './App.css';
import AddTask from './components/AddTask';
import Button from './components/Button';
import Header from './components/Header';
import {useState} from "react"
import Tasks from './components/Tasks';
function App() {
  const [tasks, setTasks]=useState([
    {
      id:1,
      text:"Study React Pre-class Notes",
      day:"Dec 12th at 2.30pm",
      isDone: false,
    },
    {
      id:2,
      text:"Feed the Dog ",
      day:"Dec 13th at 15.30pm",
      isDone: true,
    } 
  ]);

  const [showAddTask, setShowAddTask]=useState(false);


  //Delete task;

  const deleteTask=(deleteTaskId)=>{
    // console.log("delete task",deleteTaskId)
    setTasks(tasks.filter((task)=>task.id!==deleteTaskId));


  }

  //Add Task..

  const addTask=(newTask)=>{
    const id=Math.floor(Math.random()*1000+1);
    const addNewTask={id, ...newTask};
    setTasks([...tasks,addNewTask])


  }


  /// TOGGLE DONE;

  const toggleDone=(toggleDoneId)=>{
    // console.log("double click", toggleDoneId)
    setTasks((tasks.map((task)=>task.id===toggleDoneId? {...task,isDone: !task.isDone}:task)))


  }

  
  /// TOGGLE Show;
  const toggleShow=()=>setShowAddTask(!showAddTask);
  





  return (
    <div className="container">
     <Header title="TASK TRACKER" />
     <AddTask addTask={addTask}/>
     {tasks.length>0?(
       <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone}/>

     ):(
       <h2 style={{textAlign:"center"}}>No Task to Show</h2>

     )}
     <Button/>
     
    </div>
  );
}

export default App;
