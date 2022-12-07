const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let sourceLocation = params.source
let destination = params.destination
let departDate = params.departDate
let returnDate = params.returnDate
let passengersCount = params.passengers


function SetSearchInfoHeader() {
  document.querySelector("#source").innerText = sourceLocation
  document.querySelector("#destination").innerText = destination
  document.querySelector("#start").innerText = departDate
  document.querySelector("#end").innerText = returnDate
  document.querySelector("#passengers").innerText = passengersCount
}

function SetDefaultSearchFields() {
  document.querySelector("#from").value = sourceLocation
  document.querySelector("#to").value = destination
  document.querySelector("#dtp1Val").value = departDate
  document.querySelector("#dtp2Val").value = returnDate
  document.querySelector("#passengersCount").value = passengersCount
}

for (let ticket of getAllTickets().filter(ticket =>
  ticket.sourceLocation === sourceLocation &&
  ticket.destination === destination &&
  ticket.departDate === departDate &&
  ticket.returnDate === returnDate &&
  ticket.remaining >= passengersCount)) {
  addToTickets(ticket)
}

SetSearchInfoHeader();
SetDefaultSearchFields();


