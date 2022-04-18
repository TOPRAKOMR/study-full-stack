import React from 'react'
import { useState } from 'react'
import ProductList from './ProductList'

const initialProducts=[
  {id:0,product: "Basketball", price:12},
  {id:1,product: "Tennis", price:44},
  {id:2,product: "Futbol", price:33},

]

const WithPropsApp = () => {
  const [products, setProducts] = useState(initialProducts)
  const increasePrice=(e)=>{
    
    console.log("artır",e.target.id);
    const newProducts=[...products];
    newProducts[e.target.id].price+=1;
    setProducts(newProducts);
    


  }

  const decreasePrice=(e)=>{
    
    console.log("azalt",e.target.id);
    const newProducts=[...products];
    newProducts[e.target.id].price-=1;
    setProducts(newProducts);
    


  }
  return (
    <div>
      <h3>WithPropsApp</h3>
      <ProductList products={products} increasePrice={increasePrice} decreasePrice={decreasePrice}/>
    </div>
  )
}

export default WithPropsApp