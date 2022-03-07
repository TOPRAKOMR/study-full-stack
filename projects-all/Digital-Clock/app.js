function ShowClockTime(){
    const time= new Date();
    let hour=time.getHours();
    let minutes=time.getMinutes();
    let second=time.getSeconds();


 let clock = hour +":"+ minutes+":"+second;
 
document.getElementsByClassName("ClockDisplay").innerText=clock;

}