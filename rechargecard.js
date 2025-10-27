  let price;
  let pick;
  let answer;
  let glo;
  let mtn;
  let airtel;
  let nine;

function onGenerate() {
  let gloPin = 777;
  // console.log(gloPin);
  let mtnPin = 555;
  let airtelPin = 123;
  let nineMobilePin = 999;

  let asteric = "*";
  let hash = "#";

  let randomNumber = Math.floor(Math.random() * 100000000000) + 1;

  let glo = randomNumber;
//   console.log(glo);
  let mtn = randomNumber;
//   console.log(mtn);
  let airtel = randomNumber;
//   console.log(airtel);
  let nineMobile = randomNumber;
//   console.log(nineMobile);

  let generate = document.getElementById("btn");
//   console.log(generate);


  pick = document.getElementById("pick").value;
//   console.log(pick);
  price = document.getElementById("price").value;
  answer = document.getElementById("answer");

  

  if (!pick && !price) {
    alert("Please select a network and an amount!")
    return;
  }else if (!pick) {
    alert("Please select a network!")
    return;
  }else if(!price) {
    alert("Please select an amount!");
    return;
  }

  let result;

  if (pick === 'glo') {
    result = glo;
  }else if (pick === 'mtn') {
    result = mtn;
  }else if (pick === 'airtel') {
    result = airtel;
  }else if (pick === '9mobile'){
    result = nineMobile;
  } 

  answer.value = result;

}

function onSave() {

  //  if(!pick || !price || !answer) {
  //       alert('Please generate a code first')
  //   }

  let pick = document.getElementById("pick").value;
  let price = document.getElementById("price").value;
  let pin = document.getElementById("answer").value;
  let tableBody = document.getElementById("tableBody");

  let table = document.getElementById("table")

  let serialNumber = 1;
  let dateCredited = new Date().toLocaleString();
  


    tableBody.innerHTML += `
    <tr>
    <td>${serialNumber}</td>
    <td>${pick.toUpperCase()}</td>
    <td>${price}</td>
    <td>${pin}</td>
    <td>Unused</td>
    <td>${dateCredited}</td>
    <td>----</td>
    <td><button onclick="deleteRow(this)" id= "btnRed" style="background-color: red; border: none; padding: 6px; margin: 4px; border-radius: 6px;" >Delete</button></td>
    </tr>
    `;

//     let button = document.getElementById("btnRed");

//     button.style.backgroundColor = 'red';
//     button.style.border = 'none';
//     button.style.padding = '6px';
//     button.style.margin = '4px';
//     border.style.borderRadius = '16px';

//     function deleteRow(para) {     
// }
   
}

function onProcess() {
  let recharge = document.getElementById('recharge');
  console.log(recharge);
  
  let show = document.getElementById('show').value !== ''? alert('Recharge Successful') : alert('Invalid input');

   tableBody.innerHTML += `
   <tr>
    <td>${serialNumber}</td>
    <td>${pick.toUpperCase()}</td>
    <td>${price}</td>
    <td>${pin}</td>
    <td>Unused</td>
    <td>${dateCredited}</td>
    <td>Used </td>
    <td><button onclick="deleteRow(this)" id= "btnRed" style="background-color: red; border: none; padding: 6px; margin: 4px; border-radius: 6px;" >Delete</button></td>
    </tr>
    `;


}

function deleteRow(button) {
  let btnRed = document.getElementById('btnRed')

  tableBody.remove();
}