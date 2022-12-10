let tickets = document.getElementById("tickets");
let ticketTemplate = document.getElementsByTagName("template")[0];

function addToTickets(ticketInfo, limited) {
  let clone = ticketTemplate.content.cloneNode(true);
  clone.querySelector("#class").innerText = ticketInfo.flightClass
  clone.querySelector("#flightSource").innerText = ticketInfo.sourceLocation
  clone.querySelector("#flightTime").innerText = ticketInfo.flightTime
  clone.querySelector("#sourceAirport").innerText = ticketInfo.sourceAirport
  clone.querySelector("#duration").innerText = ticketInfo.flightDuration
  clone.querySelector("#flightDestination").innerText = ticketInfo.destination
  clone.querySelector("#endTime").innerText = ticketInfo.endTime
  clone.querySelector("#destinationAirport").innerText = ticketInfo.destinationAirport;
  if (!limited) clone.querySelector("#limited").style.visibility = 'hidden';
  let priceElement = clone.querySelector("#price");
  priceElement.innerText = ticketInfo.price
  priceElement.addEventListener("click", function () {

    ticketInfo.passengersCount = document.getElementById("passengersCount").value;
    let json = JSON.stringify({ticketInfo});
    sessionStorage.setItem("buyingTicket", json);
    if (sessionStorage.getItem("token") === undefined) {
      sessionStorage.setItem("afterLoginPage", "purchase.html");
      window.location.href = "login.html";
    } else {
      window.location.href = "purchase.html";
    }
  });
  tickets.appendChild(clone);
}
