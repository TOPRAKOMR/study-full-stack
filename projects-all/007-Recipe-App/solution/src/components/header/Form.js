import React from 'react'
import { useState } from 'react';
import axios from "axios"
import { Button, FoodInput, FormContainer, Select } from './HeaderStyles';




    

const Form = ({setQuery,getData, mealTypes,setMeal}) => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        getData();

    }
    



  return (

      <FormContainer>
          <FoodInput type="text" placeholder='Search'
          onChange={(e)=>setQuery(e.target.value)}/>
          <Button type='submit'> Search</Button>
          <Select name='mealTypes' id='mealTypes' 
          onChange={(e)=>setMeal(e.target.value)}
          >
            {/* {mealTypes.map((item,index)=><option key={index} value={item.toLowerCase()}>{item}</option>)} */}

          </Select>



      </FormContainer>

  )

    
}

export default Form