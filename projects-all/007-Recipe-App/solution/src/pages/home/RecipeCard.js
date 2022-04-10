import React from 'react'
import Form from '../../components/header/Form'
import axios from 'axios'

const RecipeCard = () => {


  axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selected}`)
  .then(({data})=>{

      console.log(data.hits)
      setRecipe(data.hits)
      console.log(recipe)
      //data.hits.map((ahmet)=>{
          // console.log(ahmet.recipe.label)
          //setRecipe(ahmet.recipe.label)

      } )



  return (
    <div>

        
        


        <h2>Recipe Card</h2>
    </div>
  )
}

export default RecipeCard