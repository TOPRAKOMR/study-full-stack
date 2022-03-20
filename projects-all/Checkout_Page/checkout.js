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
    let quantityP= event.target.parentElement.parentElement.querySelector("#product-quantity");
    // console.log(quantityP);
    // console.log(event.target);
    // minus buttons
    if(event.target.classList.contains("fa-minus")|| event.target==quantityP.parentElement.firstElementChild ){
        // console.log("minus clicked");
        if(quantityP.innerText>1){
            quantityP.innerText--;
            //calculate ProductTotal
            //Cart total
            calculateProductTotal(quantityP);

        }
        else{
            if (confirm("sillinecek kardes")){
                quantityP.parentElement.parentElement.parentElement.remove();
                //Cart total
                calculateCartTotal();


            };
        }
        

    }
    else if(event.target.className=="fas fa-plus" || event.target==quantityP.parentElement.lastElementChild ){
        // console.log("plusBtn clicked")
        quantityP.innerText++;
        //calculate ProductTotal
        //Cart total
        calculateProductTotal(quantityP);

    }


    // remove buttons..
    else if(event.target.className=="remove-product"){
        // console.log("Remove Btn clicked")
        quantityP.parentElement.parentElement.parentElement.remove();
        //Cart total
        calculateCartTotal();

    }
    

})

const calculateProductTotal=(quantityP)=>{
    let productPrice=quantityP.parentElement.parentElement.querySelector("strong");
    let productTotalPriceDiv=quantityP.parentElement.parentElement.querySelector("product-line-price");
    productTotalPriceDiv.innerText=(quantityP.innerText*productPrice.innerText).toFixed(2);
    calculateCartTotal();

}



const calculateCartTotal=()=>{

let productTotalPriceDivs=document.querySelectorAll("product-line-price");
let subtotal=0;
productTotalPriceDivs.forEach(eacproducttotalPriceDiv =>{
    subtotal+=parseFloat(eacproducttotalPriceDiv.innerText)
});
console.log(subtotal);
let taxPrice=subtotal*localStorage.getItem("taxRate");
console.log(taxPrice);
let shipping=(subtotal>0 ? parseFloat(localStorage.getItem(shippingPrice)):0);
console.log(shipping);
let cartTotal=subtotal+taxPrice+shipping;
console.log(cartTotal);

document.querySelector("#cart-subtotal p:nth-child(2)").innerText=subtotal.toFixed(2);
document.querySelector("#cart-tax p:nth-child(2)").innerText=taxPrice.toFixed(2);
document.querySelector("#cart-sipping p:nth-child(2)").innerText=shipping.toFixed(2);
document.querySelector("#cart-total p:nth-child(2)").lastElementChild.innerText=cartTotal.toFixed(2);


}



