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

 import axios from "axios";
import fetch from "node-fetch";
//  fetch("https://jsonplaceholder.typicode.com/users").then((data)=>data.json())
//  .then((users)=>{
//      fetch("https://jsonplaceholder.typicode.com/posts/1").then((data)=>data.json())
//      .then((post)=>{console.log("Post Yklendi", post)})

//     });


// async function getData() {
//     const post=await(
//         fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
//     const users=await(
//         fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();
//     console.log("Users:",users);
//     console.log("Post 1",post);


// }
// getData();


// (async()=>{
//     // const users=await axios("https://jsonplaceholder.typicode.com/users");
//     const {data}=await axios("https://jsonplaceholder.typicode.com/users");
//     const {data: post1}= await axios("https://jsonplaceholder.typicode.com/posts/1");
//     // console.log("Users:",users);
//     console.log("Users:",data);
//     console.log("Post1;",post1);
// })();
