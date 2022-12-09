let fromElement = document.getElementById("from");
let toElement = document.getElementById("to");
let locations = getLocations();

addOptionsToSelectElement(locations, fromElement);
addOptionsToSelectElement(locations, toElement);

function addOptionsToSelectElement(options, element){
  for (let option of options){
    let opt = document.createElement('option');
    opt.innerHTML = option;
    element.appendChild(opt);
  }
}

function searchTickets(){
  window.location = "flight-selection.html"
}

function loginPage(){
  window.location= "../app/login.html";
}
