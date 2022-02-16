
let list_btn=document.getElementsByClassName("Button");
let list_process=document.getElementsByClassName("Proces1");
let list_other=document.getElementsByClassName("Proces2")

let value;
let old_value;
let result;





for (let i = 0; i < list_btn.length; i++) {
    // btn_value[i]= list_btn[i].innerHTML
    
    list_btn[i].addEventListener("click",() =>{
        
        document.getElementById("screen2").innerHTML+=list_btn[i].innerHTML;

    })
    
}

for (let i = 0; i < list_process.length; i++) {
    list_process[i].addEventListener("click",()=>{
        document.getElementById("screen2").innerHTML=list_process[i].innerHTML;
    })
    
}

























///rakamlar için



// function yazdir() {
//     for (let i = 0; i < list_btn.length; i++) {
//         btn_value[i]= list_btn[i].innerHTML;
//         // console.log(value);
//         if (btn_value[i]!="AC"&& btn_value[i]!="=") {
//             list_btn[i].addEventListener("click", ()=>{
//                 document.getElementById("screen2").innerHTML=btn_value[i];
//                 result=btn_value[i];
//                 console.log(result);
//                 // return;
    
//             });
