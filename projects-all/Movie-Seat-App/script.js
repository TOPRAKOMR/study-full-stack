const container=document.querySelector(".container");
const allSeats=document.querySelectorAll(".container .seat");
const notOccupiedSeats=document.querySelector(".container .seat:not(.occupied)");
const count=document.getElementById("count");
const film=document.getElementById("film");
const total=document.getElementById("total");
const movieselectBox=document.getElementById("movie");


movieselectBox.addEventListener("change",(e)=>{
    let ticketPrice=e.target.value;
    let movieIndex= e.target.selectedIndex;
    console.log(movieIndex);
    setMovieDataLocalStorage(ticketPrice,movieIndex);

});


let curentTicketPrice=localStorage.getItem("selectedMoviePrice") ? localStorage.getItem("selectedMoviePrice"): movieselectBox.value;

let curentMovieIndex=localStorage.getItem("selectedMovieIndex") ? localStorage.getItem("selectedMovieIndex"): movieselectBox.selectedIndex;


const setMovieDataLocalStorage=(ticketPrice,movieIndex)=>{

    localStorage.setItem("selectedMovieIndex",movieIndex);
    localStorage.setItem("selectedMoviePrice",ticketPrice);

}
container.addEventListener("click",(e)=>{
    console.log(e.target);
    if(e.target.classList.contains("seat")&& !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected");
    }
    // if(e.target.classList.contains("seat")&& e.target.classList.contains("occupied")){
    //     alert("lütfen başka koltuk seç")
    // }
    updateMovieInfo();


})

const updateMovieInfo =()=>{
    let selectedSeats=document.querySelectorAll(".row .seat.selected");
    let selectedSeatsIndexArray= [...selectedSeats].map(seat=>[...allSeats].indexOf(seat));
    console.log(selectedSeatsIndexArray);
    localStorage.setItem("selectecseats",JSON.stringify(selectedSeatsIndexArray));

}

window.onload=()=>{
    displaySeats();
    updateMovieInfo();
    

}

