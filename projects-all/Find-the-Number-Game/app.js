function rnd_number_fnc () {
    return  Math.floor(Math.random()*101)
}
let rnd_number=rnd_number_fnc ()

console.log(rnd_number);

let predNumber = document.getElementById("number_text");
let btn_check = document.getElementById("btn_check");
let btn_reset = document.getElementById("btn_reset");
let list_number=document.getElementById("result_list");
let gues_count=0;


btn_check.addEventListener("click", ()=>{

    let number=predNumber.value;
    if (number > 0 && number < 101){
        if(number==rnd_number){
            gues_count++;
            list_number.innerHTML+= '<li>'+gues_count+ '. Guess  Congratulations!  You won It.  Guess number: '+ number + '</li>';
            document.getElementById("attempts").innerHTML=gues_count;
        
            
        }
        else if( number > rnd_number){
            gues_count++;
            list_number.innerHTML+= '<li>'+gues_count+ '. Guess: ' + number +'  Wrong! Last guess was too high! </li>';
            document.getElementById("attempts").innerHTML=gues_count;
    
    
            }
        else if(number<rnd_number){
            gues_count++;
            list_number.innerHTML+= '<li>'+gues_count+ '. Guess: ' + number +'  Wrong! Last guess was too low! </li>';
            document.getElementById("attempts").innerHTML=gues_count;
            }
 
    }
    else alert(" Please enter a number between 1-100");

})

btn_reset.addEventListener("click",()=>{
    const rnd_number=rnd_number_fnc ();
    list_number.innerHTML="";
    document.getElementById("attempts").innerHTML="";
    gues_count=0;





})








