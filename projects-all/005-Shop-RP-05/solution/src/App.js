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
    <div className="App" style={{width:"400px",height:"400px",display:"flex", flexDirection:"column",flexWrap:"wrap"}}>
      {products.map((product)=>

        <div>
          <ProductItem
          key={product.id}
          ahmet={product}
          />
        </div>
      )
      }


    </div>
  );
}

export default App;
