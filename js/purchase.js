function duplicate(){
  let i = 0;
  let passengers = document.getElementById('passengerSection').childNodes;

  for(let child in passengers){
    if(passengers[child].nodeType == 1){
      i = i + 1;
    }
  }

  let original = document.getElementById('passenger_0');
  let copy = original.cloneNode(true);
  copy.id = 'passenger_' + i;
  let passengerSection = document.getElementById('passengerSection');
  passengerSection.appendChild(copy);

}

function saveInformation(){

  let i = 0;
  let passengers = document.getElementById('passengerSection').childNodes;

  for(let child in passengers){
    if(passengers[child].nodeType == 1){
      i = i + 1;
    }
  }

  for(let j = 0; j < i; i ++){
    let passenger = document.getElementById('passenger_'+ j);
    let passportNumber = passenger.querySelector("#passportNumber").innerText;
    let lastName = passenger.querySelector("#lastName").innerText;
    let firstName = passenger.querySelector("#firstName").innerText;

  }




}

let x = sessionStorage.getItem("buyingTicket");
let ticketInfo  = JSON.parse(x);

document.querySelector("#endTime").innerText = ticketInfo.ticketInfo.endTime
document.querySelector("#startTime").innerText = ticketInfo.ticketInfo.flightTime;
document.querySelector("#destination").innerText = ticketInfo.ticketInfo.destination;
document.querySelector("#source").innerText = ticketInfo.ticketInfo.sourceLocation;


console.log(sessionStorage.getItem("buyingTicket"));
