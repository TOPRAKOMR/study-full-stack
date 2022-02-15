let inputBox=document.querySelector(".content input");
let addBtn=document.querySelector(".content button");

inputBox.onkeyup=() =>{
    let userData =inputBox.value;
    if (userData.trim()!= 0) {
        addBtn.classList.add("active");
        
    }else{
        addBtn.classList.remove("active");

    }
}

addBtn.onclick = () =>{
    let dolist= localStorage.getItem()


}
