console.log("**** app.js *******");

const dilInput = document.querySelector(".diller");
const silBtn = document.getElementById("sil");
const ekleBtn = document.getElementById("ekle");

const dilSection = document.querySelector("#dil-section");

const ul = document.createElement("ul");
dilSection.appendChild(ul);

//? SELECTORS
//************************************************* */
console.log(dilSection.children[0]);
console.log(dilSection.parentNode.parentNode);

// const h1 = ul.closest('.container').firstChild;
const h1 = ul.closest(".container").firstElementChild;
console.log(h1);
h1.style.color = "red";

//?container class ı içerisindeki btn class'ına ait olan elementleri arar.
const buttons = ul.closest(".container").querySelectorAll(".btn");
console.log(buttons);
//************************************************* */

ekleBtn.onclick = function () {
  if (!dilInput.value) {
    alert("lütfen bir dil giriniz");
  } else {
    ul.innerHTML += `<li>${dilInput.value}</li>`;
    dilInput.value = "";
    javakontrol();
  }
};

const javakontrol = () => {
  document.querySelectorAll("ul li").forEach((dil) => {
    const kucukharf = dil.textContent.toLowerCase();
    if (kucukharf === "javascript") {
      // dil.className='red';
      dil.setAttribute("class", "red");
    }
  });
};

silBtn.onclick = function () {
  ul.childElementCount > 0
    ? ul.removeChild(ul.lastElementChild)
    : alert("eleman kalmadı");
};

dilInput.addEventListener("keydown",(e)=>{
  if(e.code==="Enter"){
    ekleBtn.onclick();
  }
  if(e.code==="Delete"){
    silBtn.onclick();
  }
})

window.onload = () => {
  javakontrol();
  dilInput.focus();
};
