// console.log("hello");
// var slugify = require('slugify'); ES-5 ver.
// import slugify from "slugify";

// const title  =slugify("some string lorem ipsum");

// console.log(title);


/////my module

// import {hello,Topla, Cikar} from './my-module.js';

import hello, {Topla, Cikar,user,users} from './my-module.js'; //default olan export ayrı yazılmalı..

console.log(Topla(4,5));
console.log(Cikar(4,5));
console.log(user);
console.log(users);
hello("omer");

