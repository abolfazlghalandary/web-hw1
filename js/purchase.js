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
  let departDate = document.getElementById('startTime').innerText;
  let returnDate = document.getElementById('endTime').innerText;
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
      passportNumber : passportNumber
    };
    passengerList.push(informationOfPassenger);
  }
  let listOfAllData = [];
  let travelInformation = {
    departDate : departDate,
    returnDate : returnDate,
    source : source,
    destination : destination,
    passengerList : passengerList
  }

  if(localStorage.getItem("travelInfos") != null){
    let previous = localStorage.getItem("travelInfos");
    listOfAllData = JSON.parse(previous);
    console.log("enter")
  }
  console.log(travelInformation)
  listOfAllData.push(travelInformation);
  let json = JSON.stringify(listOfAllData);
  console.log(json)
  localStorage.setItem("travelInfos",json);
  window.location = '../app/home.html'
  alert("خرید بلیط با موفقیت انجام شد.")
}

let x = sessionStorage.getItem("buyingTicket");
let ticketInfo  = JSON.parse(x);

document.querySelector("#endTime").innerText = ticketInfo.ticketInfo.returnDate
document.querySelector("#startTime").innerText = ticketInfo.ticketInfo.departDate;
document.querySelector("#destination").innerText = ticketInfo.ticketInfo.destination;
document.querySelector("#source").innerText = ticketInfo.ticketInfo.sourceLocation;


let ticket = sessionStorage.getItem('buyingTicket');
let ticketObject = JSON.parse(ticket);
let numberOfPassengers = ticketObject.ticketInfo.passengersCount;
let original = document.getElementById('passenger_0');
let passengerSection = document.getElementById('passengerSection');
for(let i = 1; i < numberOfPassengers; i++){
  let copy = original.cloneNode(true);
  copy.id = 'passenger_' + i;
  passengerSection.appendChild(copy);
}

