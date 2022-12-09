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
  let startTime = document.getElementById('startTime').innerText;
  let endTime = document.getElementById('endTime').innerText;
  let source = document.getElementById('source').innerText;
  let destination = document.getElementById('destination').innerText;
  let passengerList = [];
  for(let j = 0; j < i; j++){
    let passenger = document.getElementById('passenger_'+ j);
    let passportNumber = passenger.querySelector("#passportNumber").value;
    let lastName = passenger.querySelector("#lastName").value;
    let firstName = passenger.querySelector("#firstName").value;
    let informationOfPassenger = {
      lastname : lastName,
      firstName : firstName,
      passportNumber : passportNumber,
      startTime : startTime,
      endTime: endTime,
      source : source,
      destination : destination
    };
    passengerList.push(informationOfPassenger);
  }
  let json = JSON.stringify(passengerList);
  console.log(json)
  localStorage.setItem("passengerInfos",json);




}

let x = sessionStorage.getItem("buyingTicket");
let ticketInfo  = JSON.parse(x);

document.querySelector("#endTime").innerText = ticketInfo.ticketInfo.endTime
document.querySelector("#startTime").innerText = ticketInfo.ticketInfo.flightTime;
document.querySelector("#destination").innerText = ticketInfo.ticketInfo.destination;
document.querySelector("#source").innerText = ticketInfo.ticketInfo.sourceLocation;


console.log(sessionStorage.getItem("buyingTicket"));
