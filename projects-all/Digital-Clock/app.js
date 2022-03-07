function ShowClockTime(){
    let time= new Date();
    let hour=time.getHours();
    let minutes=time.getMinutes();
    let second=time.getSeconds();
    
    hour=(hour<10)? "0"+hour : hour;
    minutes=(minutes<10)? "0"+minutes : minutes;
    second=(second<10)? "0"+second : second;


 let clock = hour +":"+ minutes+":"+second;



document.getElementById("clockDisplay").innerText = clock;
// document.getElementById("clockDisplay").textContent=clock;

setTimeout(ShowClockTime,1000);
}

ShowClockTime();