function ShowClockTime(){
    let time= new Date();
    let hour=time.getHours();
    let minutes=time.getMinutes();
    let second=time.getSeconds();


 let clock = hour +":"+ minutes+":"+second;


document.getElementsByClassName("clockDisplay").innerText=clock;
document.getElementsByClassName("clockDisplay").textContent=clock;

setTimeout(ShowClockTime,1000);
}

ShowClockTime();