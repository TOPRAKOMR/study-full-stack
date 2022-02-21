function rnd_number_fnc () {
    return  Math.floor(Math.random()*101)
}
let rnd_number=rnd_number_fnc ()



console.log(rnd_number);
// let i=1;
// let up_number=100;
// let down_number=0;


let predNumber = document.getElementById("number_text");
let btn_check = document.getElementById("btn_check");
let btn_reset = document.getElementById("btn_reset");
let list_number=document.getElementById("result_list");

btn_check.addEventListener("click", ()=>{
    // let newLi =document.createElement("li");
    // let licontent = document.createTextNode(predNumber.value);

    let number=predNumber.value;
    
    if(number==rnd_number){
        list_number.innerHTML+= '<li>' + number +' (too low)</li>';
        
    
        
    }
    else if( number > rnd_number){
        list_number.innerHTML+= '<li>' + number +' (too low)</li>';

        i++;


        }
    else if(number<rnd_number){
        list_number.innerHTML+= '<li>' + number +' (too low)</li>';

        i++;
        
        }
        

})






