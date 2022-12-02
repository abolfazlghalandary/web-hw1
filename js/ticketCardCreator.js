let tickets = document.getElementById("tickets");
let ticketTemplate = document.querySelector('#ticketTemplate');
function addToTickets(ticketInfo) {
  let clone = ticketTemplate.cloneNode( true );
  clone.querySelector("#class").innerText = ticketInfo.flightClass
  clone.querySelector("#flightSource").innerText = ticketInfo.sourceLocation
  clone.querySelector("#flightTime").innerText = ticketInfo.flightTime
  clone.querySelector("#sourceAirport").innerText = ticketInfo.flightClass
  clone.querySelector("#duration").innerText = ticketInfo.flightClass
  clone.querySelector("#flightDestination").innerText = ticketInfo.flightClass
  clone.querySelector("#endTime").innerText = ticketInfo.flightClass
  clone.querySelector("#destinationAirport").innerText = ticketInfo.flightClass
  clone.querySelector("#price").innerText = ticketInfo.flightClass
  tickets.appendChild( clone );
}
addToTickets()
