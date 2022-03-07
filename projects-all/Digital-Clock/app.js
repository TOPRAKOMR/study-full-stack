function ShowClockTime(){
    let time= new Date();
    let hour=time.getHours();
    let minutes=time.getMinutes();
    let second=time.getSeconds();


 let clock = hour +":"+ minutes+":"+second;



document.getElementById("clockDisplay").innerText = clock;
// document.getElementById("clockDisplay").textContent=clock;

setTimeout(ShowClockTime,1000);
}

ShowClockTime();