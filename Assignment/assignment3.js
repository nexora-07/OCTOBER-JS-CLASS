'use strict';

let nameArr = [];
let user;
let firstCase;

function add() {
  let inputField = document.getElementById("show");
  let userInput = inputField.value.trim();

  inputField.value = '';

  if (userInput === '') {
    alert('Please type something');
    return;
  }

  user = {
    username: userInput 
  };
  nameArr.push(user);

  let letter = userInput[0];
  let capitalLetter = letter === letter.toUpperCase() && letter !== letter.toLowerCase();
  let smallLetter = letter === letter.toLowerCase() && letter !== letter.toUpperCase();

  if (capitalLetter) {
    userInput = user.username;
  } else if(smallLetter) {
    userInput = user.username;
  } 

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