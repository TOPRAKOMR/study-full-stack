const taxRate=0.18;
const shippingPrice=15.0;

window.addEventListener("load",()=>{
    localStorage.setItem("taxRate",taxRate);
    localStorage.setItem("shippingPrice",shippingPrice);

    sessionStorage.setItem("taxRate",taxRate);
    sessionStorage.setItem("shippingPrice",shippingPrice);
})

// capturing....

let productsDiv =document.querySelector(".products");
productsDiv.addEventListener("click",(event)=>{
    console.log(event.target);
    // minus buttons
    if(event.target.classList.contains("fa-minus" || )){
        console.log("minus clicked");
    }
    else if(event.target.className=="fas fa-plus"){
        console.log("plusBtn clicked")
    }
    else if(event.target.className=="remove-product"){
        console.log("Remove Btn clicked")
    }

})

