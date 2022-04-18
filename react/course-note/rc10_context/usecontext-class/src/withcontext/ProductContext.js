import React, {createContext,useState} from 'react';

export const ProductContext=createContext();

const initialProducts=[
  {id:0,product: "Basketball", price:12},
  {id:1,product: "Tennis", price:44},
  {id:2,product: "Futbol", price:33},

];

export const ProductProvider=(props)=>{
  const [products, setProducts] = useState(initialProducts)
  const increasePrice=(id)=>{
    
    console.log("artır",id);
    const newProducts=[...products];
    newProducts[id].price+=1;
    setProducts(newProducts);
    


  }

  const decreasePrice=(id)=>{
    
    console.log("azalt",id);
    const newProducts=[...products];
    newProducts[id].price-=1;
    setProducts(newProducts);
    


  }
  return(

    <ProductContext.Provider value={{setProducts,decreasePrice,increasePrice,products}}>
    {props.children} </ProductContext.Provider>
  )
  


};
