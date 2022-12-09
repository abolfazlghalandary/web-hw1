function register() {
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let repeatPassword = document.getElementById('password1').value;
  if (validate(password, repeatPassword)) {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    console.log(localStorage.getItem('username'));
    window.location = "../app/login.html";
  }
  else {
    alert("type the password again correct!")
  }
}

function validate(password, repeatPassword){
  return password === repeatPassword;
}
