const fetchCountry = async (name) => {
    const url =`https://restcountries.com/v3.1/all`;

    try {
        const res =await fetch(url);
        if(!res.ok){
            renderError(`Something went wrong: ${res.status}`);
            throw new Error();
        }
        const data = await res.json();
        console.log(data);
    
    
        // renderCountry(data[0]);
        renderSelect(data)
    } catch (error) {
        console.log(error)
        
    }



};

const renderCountry=(country)=>{
console.log(country);
const countriesDiv=document.querySelector('.countries');
const {capital,name:{common},region,flags:{svg},languages,currencies}=country;
// console.log(currencies)
// console.log(Object.values(currencies)[0].name)
countriesDiv.innerHTML += `
<div class="card" style="width: 18rem;">
  <img src="${svg}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${common}</h5>
    <p class="card-text">${region}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> <i class="fas fa-lg fa-landmark"></i> ${capital}</li>
    <li class="list-group-item"> <i class="fas fa-lg fa-comments"></i> ${Object.values(languages)}</li>
    <li class="list-group-item"> <i class="fas fa-lg fa-landmark"></i> ${Object.values(currencies)[0].name}, ${Object.values(currencies)[0].symbol} </li>
  </ul>
 
</div>

`;

}

const renderSelect=(countries)=>{
    console.log(countries);
    const selectDiv=document.querySelector('.form-select');
    for (const country in countries) {
        selectDiv.innerHTML += `
        <option value="">${country}</option>
  `;
            
        }
    }
    

const renderError=(err)=>{
const countriesDiv=document.querySelector('.countries')
countriesDiv.innerHTML=`
<h1 class="text-danger">${err}</h1>
<img src="./img/404.png" alt="" />
`;
}

fetchCountry("turkey");
fetchCountry("usa");
