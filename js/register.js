function register(){
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  localStorage.setItem("username",username);
  localStorage.setItem("email",email);
  localStorage.setItem("password",password);
  console.log(localStorage.getItem('username'));
  window.location = "../app/login.html";
}
