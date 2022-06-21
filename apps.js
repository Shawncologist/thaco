
// Load the nav bar
$(function(){
  $("#nav-placeholder").load("nav.html");
});


// Random accent colour on page load
let rooty = document.querySelector(':root');

function setCssVar() {
let colorPool = ['#F806CC','#47B5FF','#FFD24C','#00FFAB','#EB5353']
let randomColorResult = "";
randomColorResult += colorPool[Math.floor(Math.random() * colorPool.length)];
 rooty.style.setProperty('--accent', randomColorResult);
}

window.onload = setCssVar;



// let numPeople = "";
// for(let i=1; i<=100 ; i++) numPeople += `<option>${i}</option>`;
//
// document.querySelector("#hundred").innerHTML = numPeople;