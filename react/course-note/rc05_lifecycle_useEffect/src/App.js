import React, { useState } from 'react'
import ClassComponent from './components/ClassComponent'
import UseEffectComp from './components/UseEffectComp'
import Users from './components/Users'
import UseStateComp from './components/UseStateComp'

function App() {
  const [isVisible, setİsVisible]=useState(true)
  return (
    <div className="App">
      {/* <h2>LifeCycles</h2> */}
      {/* {<button onClick={()=>setİsVisible(!isVisible)}>Toggle Comp</button>} */}
      {/* {isVisible&& <ClassComponent/>}  */}
      {/* <UseStateComp/> */}
      {/* {isVisible && <UseEffectComp/>} */}
      <Users/>
      

      
    </div>
  )
}

export default App
