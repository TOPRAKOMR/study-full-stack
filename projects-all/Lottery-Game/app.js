let lucky_arr=[];

function lucky_fun() {    
let lucky_number;
lucky_arr=[];
let lucky_number7;
// ilk 6 sayı üretildi..
for (let i = 0; i < 6; i++) {
    lucky_number=Math.floor(Math.random() * 91);
    lucky_arr[i]=lucky_number;      
};
/// ilk 6 sayı
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

//console.log(lucky_fun());

let lucky_btn=document.getElementById("btn_number");

// console.log(input_number);
// let repeat;

lucky_btn.addEventListener("click",()=>{
    
    let input_number=document.getElementById("txt_number").value;
    repeat=input_number;

    for (let i = 0; i < repeat; i++) {
        lucky_fun();
        yazdir();
        
    }
    //console.log(repeat);

})


//ekran yazdırma.
function yazdir() {
    let li_lucky=document.createElement("li");
    let Li_Text= document.createTextNode(lucky_arr);
    li_lucky.appendChild(Li_Text);
    document.getElementById("result").appendChild(li_lucky);
    
}







