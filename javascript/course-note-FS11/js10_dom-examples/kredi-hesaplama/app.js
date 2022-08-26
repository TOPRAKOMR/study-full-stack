console.log("***** kredi hesaplama");

const select =document.querySelector(".form-select");
const vade =document.querySelector("#vade");
const tutar =document.querySelector("#tutar");
const hesaplaBtn =document.querySelector(".btn");
let oran=0;
let taksit=0;


hesaplaBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  if(select.value==="konut kredisi"){
    oran=1.29;
  }
  if(select.value==="ihtiyac kredisi"){
    oran=1.99;
  }
  if(select.value==="arac kredisi"){
    oran=1.79;
  }
  if (!select.value || !vade.value || !tutar.value) {
    alert("lütfen kredi türü vade ve tutar giriniz")
    
  }
  const faiz= oran/100;
  taksit=tutar.value*(faiz*(1+faiz)**vade.value)/((1+faiz)**vade.value-1);
  // console.log(taksit)
  sonuclariGoster();
})

const sonuclariGoster=()=>{
  const sonuclar=document.querySelector(".sonuclar");

  sonuclar.innerHTML=`<table class="table table-bordered mt-4">
  <tbody>
  <tr>
    <th>Kredi Miktarı</th>
    <td>${tutar.value}</td>
    <th>Kredi Tipi</th>
    <td>${select.value}</td>
  </tr>
  <tr>
    <th>Vade</th>
    <td>${vade.value}</td>
    <th>Faiz Oranı</th>
    <td>${oran}</td>
  </tr>
  <tr>
    <th>Toplam Tutar</th>
    <td>${taksit*vade.value}</td>
    <th>Taksit Tutarı</th>
    <td>${taksit}</td>
  </tr>
</tbody></table>`

};