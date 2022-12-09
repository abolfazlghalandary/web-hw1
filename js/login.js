function generateRandomToken(){

  return Math.random().toString(36).substring(2);

}

function login(){
  let token = generateRandomToken();
  sessionStorage.setItem("token", token);
}
