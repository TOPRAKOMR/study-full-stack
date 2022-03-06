// *-----------------------------------------------------
// *                      FOREACH
// *-----------------------------------------------------

const students = ["Bedirhan", "Tuncay", "Mesut", "Enes", "Onur"];

//? 1.Method
const print = (name) => {
  console.log(name);
};

students.forEach(print);

//? 2.Anynmous Method
console.log("*******************************");
students.forEach((student) => console.log(student));

//? Example
const payments = [100, 300, -200, 500, -400, 225, 1000, -700];
let sum = 0;
payments.forEach((p) => (sum += p));
console.log("SUM:", sum);

//! foreach doesnt return
// const sumofPayments = payments.forEach((p) => (sum += p))
// console.log(sumofPayments);