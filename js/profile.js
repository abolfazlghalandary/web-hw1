let travelInfo = JSON.parse(localStorage.getItem("travelInfos"));
let tickets = document.getElementById("tickets");
let ticketTemplate = document.getElementById("ticketTemplate");
document.getElementById("username").innerText = localStorage.getItem("username")
document.getElementById("email").innerText = localStorage.getItem("email")

for (let buyInfo of travelInfo) {
  addToTickets(buyInfo)
}

function addToTickets(buyInfo) {
  let ticket = ticketTemplate.cloneNode(true);
  ticket.querySelector("#flightSource").innerText = buyInfo.source
  ticket.querySelector("#flightTime").innerText = buyInfo.departDate
  ticket.querySelector("#flightDestination").innerText = buyInfo.destination
  ticket.querySelector("#endTime").innerText = buyInfo.returnDate
  let passengers = ticket.querySelector("#passengers")
  let passengerSample = document.getElementById("passengerSample").content;
  for (let passenger of buyInfo.passengerList){
    let clone = passengerSample.cloneNode(true);
    clone.querySelector("#con").innerText = passenger.firstName + " " + passenger.lastname + " || " + passenger.passportNumber
    passengers.appendChild(clone);
  }

  tickets.appendChild(ticket);
}
