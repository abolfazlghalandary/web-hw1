let tickets = document.getElementById("tickets");
let ticketTemplate = document.querySelector('#ticketTemplate');
function addToTickets(ticketInfo) {
  let clone = ticketTemplate.cloneNode( true );
  clone.querySelector("#class").innerText = ticketInfo.flightClass
  clone.querySelector("#flightSource").innerText = ticketInfo.sourceLocation
  clone.querySelector("#flightTime").innerText = ticketInfo.flightTime
  clone.querySelector("#sourceAirport").innerText = ticketInfo.sourceAirport
  clone.querySelector("#duration").innerText = ticketInfo.flightDuration
  clone.querySelector("#flightDestination").innerText = ticketInfo.destination
  clone.querySelector("#endTime").innerText = ticketInfo.endTime
  clone.querySelector("#destinationAirport").innerText = ticketInfo.destinationAirport
  clone.querySelector("#price").innerText = ticketInfo.price
  tickets.appendChild( clone );
}

