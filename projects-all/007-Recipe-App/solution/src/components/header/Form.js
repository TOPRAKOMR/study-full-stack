import axios from 'axios';
import React, { useState } from 'react'


const Form = () => {

  const APP_ID="6b009311";

  const APP_KEY="fa07e7fb32f4d3040281e08dfcd40d16";


const HandleSubmit=(e)=>{
  e.preventDefault();
  console.log("göndere  bastınız")
  console.log(query)
  console.log(meal)

  axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`).then(({data})=>{
  setdata(data)
  data.hits.map((data)=>{
    console.log(data.recipe.label)

  })
  
  
 
  })




  

}
const [query, setQuery] = useState("")
const [meal, setMeal] = useState("")
const [data, setdata] = useState("")

const handleChange=(e)=>{
  
  // console.log(e.target.value)
  setQuery(e.target.value)

}

const handleSelected=(e)=>{
  // console.log(e.target.value)
  setMeal(e.target.value)
  // console.log(meal)



}

  return (
    <div>
        <form onSubmit={HandleSubmit}>
        <input type="text" name="name" onChange={handleChange} placeholder='Search' />
        <input type="submit" value="Gönder" />
        <select  onChange={handleSelected}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
         
        </select>
        </form>


    </div>
  )
}

export default Form