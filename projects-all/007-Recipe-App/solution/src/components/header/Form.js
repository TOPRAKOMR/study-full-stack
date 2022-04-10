import React from 'react'
import { useState } from 'react';
import axios from "axios"
import RecipeCard from '../../pages/home/RecipeCard';

const APP_ID= "6b009311";
const APP_KEY="fa07e7fb32f4d3040281e08dfcd40d16";


    

const Form = () => {
    const [selected, setSelected] = useState("")
    const [search, setSearch] = useState("")
    // const [recipe,setRecipe]=useState([])
    
    const handleClick=(e)=>{
       e.preventDefault()
    //    console.log("değerler", search,selected) 
    <RecipeCard search={search} selected={selected}/>
    
       
 
        }
        
        


    const handleSelected=(e)=>{
        setSelected(e.target.value)
        // console.log(selected)
        

        


    }

    const handleChange=(e)=>{
        setSearch(e.target.value)
        // console.log(search)


    }




  return (
    <div>
          
        <input type="text" name="name" placeholder='Search' onChange={handleChange}/>
        <input type="submit" value="Search" onClick={handleClick} />


    <select onChange={handleSelected}>
        <option value="Lunch">Lunch</option>
        <option value="Breakfast" selected>Breakfast</option>
        <option value="Dinner">Dinner</option>
    </select>
        


    </div>
  )
}

export default Form