// gün eklemek için
let addTime= new Date;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
addDay= weekday[addTime.getDay()];

head_day=document.getElementById("day");
head_day.innerText=addDay;
//
let addBtn=document.getElementsByClassName(".addButton");
let  todolist_arr = document.getElementsByTagName("li");

//
 for (i = 0; i < todolist_arr.length; i++) {
     let span = document.createElement("span");
     let txt = document.createTextNode("\u00D7");
     span.className="close_job";
     span.appendChild(txt);
     todolist_arr[i].appendChild(span);
     
 }

 let close = document.getElementsByClassName("close_job");
 //let x;
 for ( i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let job = this.parentElement;
        job.style.display="none";

    }
     
 }

addBtn.addEventListener("click", () => {
    let li_job= document.createElement("li");
    let userdata =document.getElementById("todo").value;
    let addText= document.createTextNode(userdata);
    li_job.appendChild(addText);
    if (userdata =="") {
        alert("içerik girmelisiniz..")
        }
    else{
        document.getElementById("todolist").appendChild(li_job);
    }
    document.getElementById("todo").value="";
    let spanAdd = document.createElement("span");
    let txtAdd = document.createTextNode("\u00D7");
    spanAdd.className="close_job";
    spanAdd.appendChild(txtAdd);
    li_job.appendChild(spanAdd);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div =this.parentElement;
            div.style.display="none";
            
        };
        
    }
  });