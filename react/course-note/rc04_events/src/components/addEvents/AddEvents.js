
import React from "react"

const AddEvents=()=>{
  
  function shoot(e,name){

    alert(`Great Shot ${name}`)
  }

  return(
    <div>
      {/* <button onClick={shoot}>  take the shoot</button> */}
      <button onClick={(e)=>shoot(e, "jane")}>  take the shoot</button>
    
    </div>


  )
}
export default AddEvents
