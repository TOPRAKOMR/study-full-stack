import Button from "./Button"


const Header = ({title,showAddTask,toggleShow}) => {

  const handleClick=()=>{
    console.log("Click ...")

        
  }
  return (
    <div className="header">
        <h1>{title}</h1>
        <Button handleClick={handleClick} 
        color={showAddTask? "red":"purple"} 
        text= {showAddTask? "Close Add Task Bar":"Show Add Task Bar"}
        toggleShow={toggleShow}/>


    </div>
  )
}

export default Header