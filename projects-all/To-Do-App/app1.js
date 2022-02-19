// gün eklemek için
let addTime= new Date;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
addDay= weekday[addTime.getDay()];

head_day=document.getElementById("day");
head_day.innerText=addDay;
//

const addBtn =document.querySelector(".addButton");
const txt_task =document.querySelector("#task_text");
const ul =document.querySelector("#list-group-container");


const task_create =(txt_task)  =>{
    return `
    <div class="list-group">
            <li class="checked">${txt_task} </li>
            <button class="lst-btn"><i class="fa-solid fa-trash"></i> </button>
    </div>`
};

addBtn.addEventListener("click", ()=>{
    if (txt_task.value) {
        ul.innerHTML+=task_create(txt_task.value);
        txt_task.value="";
    }
    else{
        alert("Lütfen metin giriniz..");
    }
    count_task();
});

ul.addEventListener("click", e=>{
    if (e.target.classList.contains("lst-btn")) {
        e.target.parentElement.remove();   
        count_task();     
    }
})

ul.addEventListener("click", e =>{
    if (e.target.classList.contains("unchecked")) {
        e.target.className="checked";
    }
    else{
        e.target.className="unchecked";
    }
    count_task();
    
})

const count_task =() =>{
    let checked_count=ul.getElementsByClassName("unchecked").length;
    let task_count=ul.getElementsByClassName("lst-btn").length;
    const checked_task= document.getElementById("checked_task");
    const alltask=document.getElementById("all_task");
    checked_task.innerText=checked_count;
    alltask.innerText=task_count;

}






