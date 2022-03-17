// setTimeout(()=>{
//     console.log("merhaba");

// },2000);

// setInterval(()=>{
// console.log("Merhaba ben her saniye çalışacağım..")

// },1000);

// const sayHi=(cb)=>{
//        ();
// }
// sayHi(()=>{
//     console.log("Hello");
// });

 import fetch from "node-fetch";
 fetch("https://jsonplaceholder.typicode.com/users").then((data)=>data.json())
 .then((users)=>{console.log(users)});
