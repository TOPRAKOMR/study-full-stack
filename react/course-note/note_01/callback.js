// setTimeout(()=>{
//     console.log("merhaba");

// },2000);

// setInterval(()=>{
// console.log("Merhaba ben her saniye çalışacağım..")

// },1000);

const sayHi=(cb)=>{
    cb();
}
sayHi(()=>{
    console.log("Hello");
});