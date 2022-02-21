
const list_btn=document.querySelector(".buttons-container");
const pre_display=document.querySelector(".pre-display");
const current_display=document.querySelector(".current-display");

let operator="";
let first_number="";
let isPrevOperator=false;

function calc () {
    switch (operator) {
        case "+":
            return Number(first_number)+Number(pre_display.innerHTML);
        case "-":
            return Number(first_number)-Number(pre_display.innerHTML);
        case "x":
            return Number(first_number)*Number(pre_display.innerHTML);
        case "/":
            return Number(first_number)/Number(pre_display.innerHTML);
    }
    
}

console.log(list_btn);

list_btn.addEventListener("click", (e) =>{
    if(!e.target.classList.contains("btn")) return;
    let pre_value=pre_display.innerHTML;
    let btn_value=e.target.innerHTML;
    

    if(e.target.classList.contains("AC")){
        operator="";
        first_number="";
        pre_display.innerHTML="0";
        current_display.innerHTML="";
    }


    if(e.target.classList.contains("Button")){
        if(pre_value.length<7)
            if(pre_value !=="0"){
                pre_display.innerHTML+=btn_value;
            }
        else if(btn_value !=="0"){
            pre_display.innerHTML=btn_value;
        }
    }
    if(e.target.classList.contains("PM")){
        if(pre_value[0]=="-")
            pre_display.innerHTML=pre_value.substring(1);
        else if(pre_value.length<7 && pre_value!=="0")
            pre_display.innerHTML="-"+pre_value;

    }
    if(e.target.classList.contains("Dot")){
        if(!pre_value.includes("."))
        pre_display.innerHTML+=".";
    }
    if(e.target.classList.contains("Proces1")){
        if(!isPrevOperator){
            if(current_display.innerHTML && operator){
                first_number=calc();
            }
            else first_number =pre_value;
        pre_display.innerHTML="0";
        }
    operator=btn_value;
    current_display.innerHTML=first_number+" "+operator;
    isPrevOperator=true;
    }
    else isPrevOperator=false;


    if(e.target.classList.contains("Euqal")){
        first_number=calc();
        operator="";
        current_display.innerHTML=first_number;
        pre_display.innerHTML="0";
        isPrevOperator=true;

    }

})
















