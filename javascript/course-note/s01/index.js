// console.log('Hello World!');
// console.log('***********');
// document.write('clarusway!!')
// console.log(5+3)


let str="(2x^2+5)(3x^2-5)";

str=str.split(")(");
lng=str.length;
str[0]=str[0].replace("(","");
// console.log(lng);
str[lng-1]=str[lng-1].replace(")","");
let y=[];

str.forEach((x) => { y=x.split("+")
// console.log(y);
});




console.log(y);

// console.log(y);



