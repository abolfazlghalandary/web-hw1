const airports = ["مهرآباد", "سردار", "پیام", "آزادی", "سرآمد", "انقلاب"];
const flightClass = ["کلاس بالا", "تجاری", "اقتصادی"];

function SetSearchInfoHeader() {
  document.querySelector("#source").innerText = sourceLocation
  document.querySelector("#destination").innerText = destination
  document.querySelector("#start").innerText = departDate
  document.querySelector("#end").innerText = returnDate
  document.querySelector("#passengers").innerText = passengersCount
}

function SetDefaultSearchFields() {
  document.querySelector("#fromCities").value = sourceLocation
  document.querySelector("#toCities").value = destination
  document.querySelector("#dtp1Val").value = departDate
  document.querySelector("#dtp2Val").value = returnDate
  document.querySelector("#passengersCount").value = passengersCount
}

function getFilteredTickets() {
  return getAllTickets().filter(ticket =>
    ticket.sourceLocation === sourceLocation &&
    ticket.destination === destination &&
    ticket.departDate === departDate &&
    ticket.returnDate === returnDate &&
    ticket.remaining >= passengersCount);
}

function GetRandomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function GenerateRandomTicket() {
  let flightTime = Math.floor(Math.random() * 24);
  let endTime = Math.floor(Math.random() * 24);
  let duration = endTime - flightTime;
  if (duration <= 0) duration = 24 + duration;
  let sourceAirport = GetRandomFrom(airports);
  let destinationAirport = GetRandomFrom(airports.filter(a => a !== sourceAirport));
  return {
    sourceLocation: sourceLocation,
    sourceAirport: sourceAirport,
    destination: destination,
    destinationAirport: destinationAirport,
    departDate: departDate,
    flightTime: flightTime + ":00",
    returnDate: returnDate,
    flightDuration: duration + "h",
    endTime: endTime + ":00",
    flightClass: GetRandomFrom(flightClass),
    price: (Math.floor(Math.random() * 30) + 1) + ",000,000" + " تومان",
    remaining: Math.floor(Math.random() * 100)
  };
}

function GenerateRandomTickets() {
  let tickets = [];
  for (let i = 0; i < (Math.floor(Math.random() * 11) + 1); i++) {
    tickets.push(GenerateRandomTicket());
  }
  return tickets;
}

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let sourceLocation = params.source
let destination = params.destination
let departDate = params.departDate
let returnDate = params.returnDate
let passengersCount = params.passengers

let sellableTickets = GenerateRandomTickets().filter(ticket => ticket.remaining >= passengersCount);
if (sellableTickets.length === 0) {
  let notFoundMessage = document.getElementById("notFound").content.cloneNode(true);
  document.getElementById("tickets").appendChild(notFoundMessage);
}
for (let ticket of sellableTickets/*getFilteredTickets()*/) {
  let limited = passengersCount * 3 >= ticket.remaining;
  addToTickets(ticket, limited)
}

SetSearchInfoHeader();
SetDefaultSearchFields();


