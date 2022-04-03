import Button from "./Button"


const Header = ({title}) => {

  const handleClick=()=>{
    console.log("Click ...")

        
  }
  return (
    <div className="header">
        <h1>{title}</h1>
        <Button handleClick={handleClick} color="purple" text="Show Add Task Bar"/>


    </div>
  )
}

export default Header