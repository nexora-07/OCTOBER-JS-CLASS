nameArr = [];
let user;

function add() {
    let inputField = document.getElementById("show");
    let userInput = inputField.value.trim();
    inputField.value = "";
  user = {
    name: userInput
  };
  nameArr.push(user);

  if(userInput === userInput.toUpperCase()) {
    inputField.value = user.name;
  } else if (userInput === userInput.toLowerCase()) {
    inputField.value = user.name;
  } else{
    alert('no');
    inputField.value = "";
  }
  
}