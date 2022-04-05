import logo from './logo.svg';
import React, {useEffect, useState}from "react";
import axios from  "axios";
import './App.css';
import ProductItem from './components/Product/productItem';

function App() {

  //     okuma      yazma
  const [products,setProducts]=useState([])


useEffect(() => {
  axios.get("https://fakestoreapi.com/products").then(({data})=>{
    console.log("nasılsın")
    setProducts(data)
   
  })
  

}, [])


  return (
    <div className="App">
      {products.map((product)=>

        <div>
          <ProductItem/>
        </div>
      )
      }


    </div>
  );
}

export default App;
