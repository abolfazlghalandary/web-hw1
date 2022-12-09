let fromDataList = document.getElementById("fromCities");
let toDataList = document.getElementById("toCities");
let locations = getLocations();

addOptionsToElement(locations, fromDataList);
addOptionsToElement(locations, toDataList);

function addOptionsToElement(optionContents, element){
  for (let option of optionContents){
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
