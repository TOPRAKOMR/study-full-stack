// let inputBox=document.querySelector(".content input");
let addBtn=document.getElementById("addButton");
console.log(addBtn);
// let todolist=document.querySelector(".content todolist");
// let todolist_arr =[];
// inputBox.onkeyup=() =>{
//     let userData =inputBox.value;
//     if (userData.trim()!= 0) {
//         addBtn.classList.add("active");
        
//     }else{
//         addBtn.classList.remove("active");

//     }
// };


// addBtn.addEventListener("click", () =>{
//     let todo_new=inputBox.value;
//     todolist_arr.forEach((element, index) =>{
//         todo_new = '<li> ${element} <span> <i class="fas fa-trash"></i></span> </li>';
        
//     });
//     // todolist_arr.push(inputBox.value);

//     todolist.innerHTML=todo_new;
// })

let  todolist_arr = document.getElementsByTagName("li");
console.log(todolist_arr);
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