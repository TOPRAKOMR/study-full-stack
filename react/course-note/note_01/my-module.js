// function Topla(a,b){
//     return a+b;
// }


// const Topla= function Topla(a,b){
//     return a+b;
// }


// const Topla =(a,b)=>{
//     return a+b;

// }

const Topla = (a,b)=> a+b; 
const Cikar = (a,b)=> a-b; 

// const hello =(name)=>{
//     console.log("hello "+ name);
// };

// tek parametrede parantez olmasada olur
 const hello =name=>{
    // console.log("hello "+ name);
    console.log(`hello ${name}`);
};

export const text="Text....."
export const user={
    name:"Omer",
    surname:"Toprak",
}

export const users=[
{ 
    name:"Omer",
    surname:"Toprak",

},
{
    name:"Mehmet",
    surname:"Urfa",
},
];

export{Topla,Cikar};
export default hello; // export default Hello;
