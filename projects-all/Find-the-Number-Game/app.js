let rd_number= Math.floor(Math.random()*101);
console.log(rd_number);
let i=1;
let up_number=100;
let down_number=0;


let predNumber = document.getElementById("number_text");
let btn = document.getElementById("btn_check");
btn.addEventListener("click", ()=>{
    pred_number=predNumber.value
    console.log(pred_number);
    
    do {
        
        if(pred_number==rd_number){
            //console.log("sayı esittir"+ i +".denemde buldunuz");
            //pred_number=prompt("sayı esittir"+ i +".denemde buldunuz");
            document.getElementById("attempts").innerText=i+ ". denemeniz";
            break;

        }
        else if( pred_number > rd_number){
            //console.log("tahmin edilen sayı" + pred_number +"sayısından küçüktür." + i +".denemde buldunuz");
            pred_number=prompt("tahmin edilen sayı" + pred_number +"sayısından küçüktür." + i +".denemde buldunuz");
            i++;


        }
        else if(pred_number<rd_number){
            console.log("tahmin edilen sayı" +pred_number +"sayısından büyüktür." +i +".denemde buldunuz");
            pred_number=prompt( pred_number,"100");

            i++;
           
            


        }
        
    } while (pred_number==rd_number);
            
    

        
    

})






