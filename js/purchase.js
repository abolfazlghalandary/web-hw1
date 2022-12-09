function duplicate(){
  let original = document.getElementById('duplicater');
  let copy = original.cloneNode(true);
  let passengerSection = document.getElementById('passengerSection');
  passengerSection.appendChild(copy);

}

let x = sessionStorage.getItem("buyingTicket");
let ticketInfo  = JSON.parse(x);

document.querySelector("#endTime").innerText = ticketInfo.ticketInfo.endTime
document.querySelector("#startTime").innerText = ticketInfo.ticketInfo.flightTime;
document.querySelector("#destination").innerText = ticketInfo.ticketInfo.destination;
document.querySelector("#source").innerText = ticketInfo.ticketInfo.sourceLocation;


console.log(sessionStorage.getItem("buyingTicket"));
