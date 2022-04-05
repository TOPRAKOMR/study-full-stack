import logo from './logo.svg';
import React, {useEffect, useState}from "react";
import axios from  "axios";
import './App.css';

function App() {

  //     okuma      yazma
  const [products,setProducts]=useState([])


useEffect(() => {
  axios.get("https://fakestoreapi.com/products").then((res)=>{
    console.log("nasılsın")
   
  })
  

}, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
