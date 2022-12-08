function duplicate(){
  let original = document.getElementById('duplicater');
  let copy = original.cloneNode(true);
  let passengerSection = document.getElementById('passengerSection');
  passengerSection.appendChild(copy);

}

console.log(sessionStorage.getItem("buyingTicket"));
