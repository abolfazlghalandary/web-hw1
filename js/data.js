function getLocations(){
  return [
    "تهران",
    "اهواز",
    "شیراز",
    "مشهد",
    "بندرعباس",
    "اصفهان",
    "تبریز",
    "کیش",
  ];
}

function getAllTickets(){
  return [
    {
      sourceLocation: "تهران",
      sourceAirport: "mehrabad",
      destination: "مشهد",
      destinationAirport: "shahid",
      departDate: "1401/10/30",
      flightTime: "10:00",
      returnDate: "1401/11/30",
      flightDuration: "3h",
      endTime: "12:00",
      flightClass: "first class",
      price: "10,000,000 تومان",
      remaining: "50"
    },
    {
      sourceLocation: "تهران",
      sourceAirport: "mehrabad",
      destination: "مشهد",
      destinationAirport: "shahid",
      departDate: "1401/10/30",
      flightTime: "10:00",
      returnDate: "1401/11/30",
      flightDuration: "3h",
      endTime: "12:00",
      flightClass: "first class",
      price: "10,000,000 تومان",
      remaining: "50"
    },
    {
      sourceLocation: "تهران",
      sourceAirport: "mehrabad",
      destination: "مشهد",
      destinationAirport: "shahid",
      departDate: "1401/10/30",
      flightTime: "10:00",
      returnDate: "1401/11/30",
      flightDuration: "3h",
      endTime: "12:00",
      flightClass: "first class",
      price: "10,000,000 تومان",
      remaining: "50"
    },
    {
      sourceLocation: "تهران",
      sourceAirport: "mehrabad",
      destination: "مشهد",
      destinationAirport: "shahid",
      departDate: "1401/10/30",
      flightTime: "10:00",
      returnDate: "1401/11/30",
      flightDuration: "3h",
      endTime: "12:00",
      flightClass: "first class",
      price: "10,000,000 تومان",
      remaining: "50"
    },
    {
      sourceLocation: "تهران",
      sourceAirport: "mehrabad",
      destination: "مشهد",
      destinationAirport: "shahid",
      departDate: "1401/10/30",
      flightTime: "10:00",
      returnDate: "1401/11/30",
      flightDuration: "3h",
      endTime: "12:00",
      flightClass: "first class",
      price: "10,000,000 تومان",
      remaining: "50"
    },
    {
      sourceLocation: "تهران",
      sourceAirport: "mehrabad",
      destination: "مشهد",
      destinationAirport: "shahid",
      departDate: "1401/10/30",
      flightTime: "10:00",
      returnDate: "1401/11/30",
      flightDuration: "3h",
      endTime: "12:00",
      flightClass: "first class",
      price: "10,000,000 تومان",
      remaining: "50"
    },
    {
      sourceLocation: "تهران",
      sourceAirport: "mehrabad",
      destination: "مشهد",
      destinationAirport: "shahid",
      departDate: "1401/10/30",
      flightTime: "10:00",
      returnDate: "1401/11/30",
      flightDuration: "3h",
      endTime: "12:00",
      flightClass: "first class",
      price: "10,000,000 تومان",
      remaining: "50"
    },
    {
      sourceLocation: "تهران",
      sourceAirport: "mehrabad",
      destination: "مشهد",
      destinationAirport: "shahid",
      departDate: "1401/10/30",
      flightTime: "10:00",
      returnDate: "1401/11/30",
      flightDuration: "3h",
      endTime: "12:00",
      flightClass: "first class",
      price: "10,000,000 تومان",
      remaining: "50"
    },
    {
      sourceLocation: "تهران",
      sourceAirport: "mehrabad",
      destination: "مشهد",
      destinationAirport: "shahid",
      departDate: "1401/10/30",
      flightTime: "10:00",
      returnDate: "1401/11/30",
      flightDuration: "3h",
      endTime: "12:00",
      flightClass: "first class",
      price: "10,000,000 تومان",
      remaining: "50"
    },
    {
      sourceLocation: "تهران",
      sourceAirport: "mehrabad",
      destination: "مشهد",
      destinationAirport: "shahid",
      departDate: "1401/10/30",
      flightTime: "10:00",
      returnDate: "1401/11/30",
      flightDuration: "3h",
      endTime: "12:00",
      flightClass: "first class",
      price: "10,000,000 تومان",
      remaining: "50"
    }
  ];
}

$(document).ready(function() {
  $('.autoComplete').select2();
});
$(document).on('select2:open', () => {
  document.querySelector('.select2-search__field').focus();
});
