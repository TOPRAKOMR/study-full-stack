console.log("***** kredi hesaplama");

const select =document.querySelector(".form-select");
const vade =document.querySelector("#vade");
const tutar =document.querySelector("#tutar");
const hesaplaBtn =document.querySelector(".btn");
let oran=0;


hesaplaBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  if(select.value==="konut kredisi"){
    oran=1.29;
  }
  if(select.value==="ihtiyac kredisi"){
    oran=1.99;
  }
  if(select.value==="arac kredisi"){
    oran=1.79;
  }
  console.log(oran)
})