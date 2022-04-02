import { useState } from "react";
import "./styles.css";

const MouseEvents = () => {

  const [coordX, setCoordX]= useState();
  const [coordY, setCoordY]= useState();
  const handleClick=(e)=>{
    console.log(e)
    // console.log("target", e.target)
    // console.log("currentTarget",e.currentTarget)
    // console.log(e.target.tagName)
    // e.target.tagName==="SPAN"&& e.target.remove();

  }

  const handleDoubleClick=(e)=> console.log("innertext", e.target.innerText);
  const handleMouseMove=(e)=> {
    // console.log(e.nativeEvent.offsetX);
    // console.log(e.pageX)
    setCoordX(e.pageX)
    setCoordY(e.pageY)


  }

  
  return (
    <>
      <h2>MouseEvents</h2>
      <p>
        <span>{coordX} </span> and {coordY}
      </p>
      <p>
        <span></span> and
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          <li id="todo-1" onClick={handleClick}>
            todo item 1 <span>X</span>
          </li>
          <li id="todo-2 " onDoubleClick={handleDoubleClick}  >
            todo item 2 <span>X</span>
          </li>
          <li onMouseMove={handleMouseMove} >
            todo item 3 <span>X</span>
          </li>
          <li>
            todo item 4 <span>X</span>
          </li>
          <li>
            todo item 5 <span>X</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MouseEvents;