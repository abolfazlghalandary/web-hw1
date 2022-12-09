function generateRandomToken() {

  return Math.random().toString(36).substring(2);

}

function login() {
  let username = localStorage.getItem("username");
  let password = localStorage.getItem("password");
  if (validate(username, password)) {
    let token = generateRandomToken();
    sessionStorage.setItem("token", token);
    window.location = '../app/home.html'
  }
  else{
    alert("incorrect username or password")
  }
}

function validate(username, password){
  let inputUsername = document.getElementById('username').value;
  let inputPassword = document.getElementById('password').value;
  return username === inputUsername && password === inputPassword;

}
