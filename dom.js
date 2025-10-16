//DOM--document object model
//dom to style, change content, createelement,update...
//event--

let myPara = document.getElementById('paragraph');
console.log(myPara);

//innerHTML, innerText, textContent...

myPara.innerHTML = 'Hello';


function updateText(){
    // if(myPara.innerHTML == 'Hello'){
    //     myPara.innerHTML = 'how are you'
    // }else{
    //     myPara.innerHTML = 'hello'
    // }
    let myBtn = document.getElementById('btn')
    console.log(myBtn);
    

    myPara.innerText = `How are you`;

    myPara.style.color = 'red';
    myPara.style.backgroundColor = 'aliceblue';
    myPara.style.padding = '20px';

    myBtn.style.backgroundColor = 'green';
    myBtn.style.color = '#fff';
    myBtn.style.padding = '10px 20px';
    myBtn.style.border = 'none';
    myBtn.style.borderRadius = '5px';
    
    myBtn.textContent = `Kiki`
   
}

let myNewPara = document.querySelector('.paragraph');
console.log(myNewPara);

let myList = document.querySelectorAll('.list');
console.log(myList);

myList.forEach((items, index)=> {
    items.innerHTML = 'Hey'
})

function updateName(){
    let today = new Date().toLocaleDateString()
    myPara.innerHTML = today;
}


function canCalculate(){
  let firstInp = Number(document.getElementById('firstInp').value);
  let oper = document.getElementById('operator');
  let secondInp = Number(document.getElementById('secondInp').value);
  let answer = document.getElementById('answer')

  document.getElementById('firstInp').value = '';
  document.getElementById('secondInp').value = ''


  let result;
  
  if(oper.value == '+'){
    result = firstInp + secondInp;
    answer.value = result
  }else if(oper.value == '-'){
    result = firstInp - secondInp;
    answer.value = result
  }
  else{
    alert('invalid operation')
  }
  
  updateName()
  
}