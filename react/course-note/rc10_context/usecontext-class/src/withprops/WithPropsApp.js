import React from 'react'
import { useState } from 'react'
import ProductList from './ProductList'

const initialProducts=[
  {id:1, product: "Basketball", price:12},
  {id:2,product: "Tennis", price:44},
  {id:3,product: "Futbol", price:33},

]

const WithPropsApp = () => {
  const [products, setProducts] = useState(initialProducts)
  const increasePrice=()=>{
    const newProducts=[...products];


  }
  return (
    <div>
      <h3>WithPropsApp</h3>
      <ProductList products={products} increasePrice={increasePrice}/>
    </div>
  )
}

export default WithPropsApp