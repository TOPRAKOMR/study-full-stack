
// const increment=()=>{
//     const counter=document.querySelector("#counter");
//     counter.textContent= Number(counter.textContent)+1;


// }

// document.querySelector("button").addEventListener("click",increment);

//// callback'ın dışarıda tanımlanması...

// document.querySelector("button").addEventListener("click",()=>{
//     const counter=document.querySelector("#counter");
//     counter.textContent= Number(counter.textContent)+1;
// });

const sum =(a,b)=>a+b;
const sub =(a,b)=>a-b;
const mul =(a,b)=>a*b;
const div =(a,b)=>a/b;

const calculate=(callback)=>{
    const num1=Number(prompt("First Number"));
    const num2= Number(prompt("Second Number"));
    console.log("RESULT:",callback(num1,num2));

};
calculate(sum);


