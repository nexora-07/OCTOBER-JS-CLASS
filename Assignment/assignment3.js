'use strict';

let nameArr = [];
let user;
let firstCase;

function add() {
  let inputField = document.getElementById("show");
  let userInput = inputField.value.trim();
  let message = document.getElementById("message")
  inputField.value = '';
  message.textContent = '';

  if (userInput === '') {
    alert('Please type something');
    return;
  }

  let letter = userInput[0];
  let capitalLetter = letter === letter.toUpperCase() && letter !== letter.toLowerCase();
  let smallLetter = letter === letter.toLowerCase() && letter !== letter.toUpperCase();

  // let list = userInput;

  let found = nameArr.find(item => item.username.toLowerCase() === userInput.toLowerCase());

  if(found) {
    let existingLetter = found.username[0];
    let existingIsCapital = existingLetter === existingLetter.toUpperCase() && existingLetter !== existingLetter.toLowerCase();

    if (!existingIsCapital && capitalLetter) {
      message.textContent = 'Already used';
      return
    }
  }

  user = {
    username: userInput 
  };
  nameArr.push(user);
  
//   if (userInput.toLowerCase()) {
//     if(letter.toUpperCase() && capitalLetter){
//     } else if(userInput.toLowerCase() && smallLetter) {
//     message.textContent = 'Alread used';
//     return;
//   }
// }

  renderTable();

}

  function renderTable() {
  let tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  nameArr.forEach((items, index)=> {
    tableBody.innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>${items. username}</td>
        <td><button onclick="del(${index})" style="background-color: blue; border: none; margin-left: 4px; padding: 6px;">Delete</button></td>
    </tr>
    `
  });

}



function del(index) {
  nameArr.splice(index, 1)

  renderTable();
}