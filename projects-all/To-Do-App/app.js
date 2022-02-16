let addTime= new Date;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
addDay= weekday[addTime.getDay()];

head_day=document.getElementById("day");
head_day.innerText=addDay;


let addBtn=document.getElementById("addButton");
let  todolist_arr = document.getElementsByTagName("li");
console.log(head_day);
 let i;
 for (i = 0; i < todolist_arr.length; i++) {
     let span = document.createElement("span");
     let txt = document.createTextNode("\u00D7");
     span.className="close";
     span.appendChild(txt);
     todolist_arr[i].appendChild(span);
     
 }

 let close = document.getElementsByClassName("close");
 let x;
 for ( x = 0; x < close.length; x++) {
    close[x].onclick = function() {
        let div = this.parentElement;
        div.style.display="none";

    }
     
 }

//  let listAdd= document.querySelector("ul");
//  listAdd.addEventListener("click", function(chk){
//      if (chk.target.tagName==="li"){
//          chk.target.classList.toggle("checked");
//      }
      


//  } ,false)

// function newList() {
    
    
//     // for (let i = 0; i < close.length; i++) {
//     //      close[i].onclick = function () {
//     //       var div =this.parentElement;
//     //       div.style.display="none";   
//     //      }
        
//     // }

    
    
// }

addBtn.addEventListener("click", () => {
    let li= document.createElement("li");
    let userdata =document.getElementById("todo").value;
    let addText= document.createTextNode(userdata);
    li.appendChild(addText);
    if (userdata =="") {
        alert("içerik girmelisiniz..")
        }
    else{
        document.getElementById("todolist").appendChild(li);
    }
    document.getElementById("todo").value="";
    let spanAdd = document.createElement("span");
    let txtAdd = document.createTextNode("\u00D7");
    spanAdd.className="close";
    spanAdd.appendChild(txtAdd);
    li.appendChild(spanAdd);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div =this.parentElement;
            div.style.display="none";
            
        };
        
    }
  });