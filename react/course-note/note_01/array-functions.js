const users =["Mehmet","Ahmet","Ayşe"];
const users1=[
    {
        name:"Ahmet",
        age:48,
    },
    {
        name:"Hasan",
        age:13,
    },
    {
        name:"Hasan",
        age:30,
    },
]

/* 
Push
Map
Find
filter
some
every
includes
*/

// push

// users.push("Ali");
// users.push("Omer");

// console.log(users);

//map

// users.map((item)=>{
//     console.log(item);
// });

// users1.map((item)=>{
//     console.log(item.name);
// });


// find

// const result=users1.find((item)=>item.name==="Hasan" && item.age>20);
// console.log(result);

// filter 

// const filtered= users1.filter((item)=> item.name==="Hasan");
// const filtered= users1.filter(({name,age})=> name==="Hasan"&& age<20);
// console.log(filtered);

// some 

// const some= users1.some((item)=> item.age===10);
// console.log(some);

// every 

// const every =users1.every((item)=>item.age>5);
// console.log(every);


// includes 

// const meyveler =["elma","armut","kiraz"];
// const isIncludes =meyveler.includes("karpuz");
// console.log(isIncludes);


