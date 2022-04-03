
import React, { useState } from 'react'

const UseStateComp=()=>{
const [count, setCount]= useState(0)
const [age,setAge]=useState(7)
const [user,setUser]=useState({name:"Toprak",age:"45",email:"toprak@gmail.com"})


const increase=()=> setCount(count+1)
const ageIncrease=()=>setAge((age)=>age+1)
const updateUser=()=>setUser({...user, name:"Omer"})


return(
  <div className="function">
    <h2>Functional Component</h2>
    <p>Count: {count}</p>
    <button onClick={increase}>Increase Count</button>
    <p> Age: {age}</p>
    <button onClick={ageIncrease}>Increase Age</button>

    <p> Name: {user.name}</p>
    <p> Age: {user.age}</p>
    <p> Email: {user.email}</p>

    <button onClick={updateUser}>Update User</button>

  </div>
)
}

export default UseStateComp
