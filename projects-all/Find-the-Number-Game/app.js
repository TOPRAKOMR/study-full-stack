let rd_number= Math.floor(Math.random()*101);
console.log(rd_number);
let i=1;


let predNumber = document.getElementById("number_text");
let btn = document.getElementById("btn_check");
btn.addEventListener("click", ()=>{
    pred_number=predNumber.value
    console.log(pred_number);
    
    do {
        
        if(pred_number==rd_number){
            console.log("sayı esittir"+ i +".denemde buldunuz");
            prompt("sayı esittir"+ i +".denemde buldunuz");
            break;

        }
        else if( pred_number > rd_number){
            console.log("tahmin edilen sayı" + pred_number +"sayısından küçüktür." + i +".denemde buldunuz");
            prompt("tahmin edilen sayı" + pred_number +"sayısından küçüktür." + i +".denemde buldunuz");
            i++;


        }
        else if(pred_number<rd_number){
            console.log("tahmin edilen sayı" +pred_number +"sayısından büyüktür." +i +".denemde buldunuz");
            i++;
           
            


        }
        
    } while (pred_number==rd_number);
            
    

        
    

})






