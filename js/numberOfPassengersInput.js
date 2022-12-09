$('#numberOfPassengers').on('keypress', function (event) {
  let regex = new RegExp("^[0-9]+$");
  let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});

n = document.getElementById('numberOfPassengers');

function increase(){
  let value = +n.value;
  if(isNaN(value)){
    n.value = "1";
  } else{
    n.value = `${value + 1}`
  }
}

function decrease(){
  let value = +n.value;
  if(isNaN(value)){
    n.value = "1";
  } else if (value > 1){
    n.value = `${value - 1}`;
  }
}
