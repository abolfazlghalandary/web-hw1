const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let sourceLocation = params.source
let destination = params.destination
let departDate = params.departDate
let returnDate = params.returnDate
let passengersCount = params.passengers

