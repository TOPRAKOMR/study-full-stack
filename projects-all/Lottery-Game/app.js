let lucky_arr=[];

function lucky_fun() {    
let lucky_number;
let lucky_number7;
// ilk 6 sayı üretildi..
for (let i = 0; i < 6; i++) {
    lucky_number=Math.floor(Math.random() * 91);
    lucky_arr[i]=lucky_number;      
};
/// ilk 6 sayı sıralama
for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
        if (lucky_arr[y]>lucky_arr[y+1]){
            let gecici=lucky_arr[y];
            lucky_arr[y]=lucky_arr[y+1];
            lucky_arr[y+1]=gecici;
        }
    }   
}
//7-8 sayı
lucky_number7=Math.floor(Math.random() * 91);
for (let i = 0; i < 6; i++) {
    if (lucky_number7==lucky_arr[i]) {
        lucky_number7=Math.floor(Math.random() * 91);
    }    
}
lucky_arr[6]=lucky_number7;
lucky_arr[7]=Math.floor(Math.random() * 91);
return lucky_arr;
}


let lucky_btn=document.getElementById("btn_number");
let number_result=document.getElementById("result_ul");
lucky_btn.addEventListener("click",()=>{
    number_result.innerHTML="";
    
    let input_number=document.getElementById("txt_number").value;
    repeat=input_number;

    for (let i = 0; i < repeat; i++) {
        lucky_fun();
        number_result.innerHTML+= "<li> &#9824  "+ lucky_arr[0]+" - "+ lucky_arr[1]+" - " +lucky_arr[2] +" - "+ lucky_arr[3]+" - "+ lucky_arr[4]+" - "+ lucky_arr[5]+" | "+ lucky_arr[6]+" | " + lucky_arr[7]+ "</li> <hr> " ;
        
    }
})