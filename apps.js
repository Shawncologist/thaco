
let numPeople = "";
for(let i=1; i<=100 ; i++) numPeople += `<option>${i}</option>`;

document.querySelector("#hundred").innerHTML = numPeople;
