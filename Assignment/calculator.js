"use strict";
let result;
let oper;
let getFirstVal;
let canClear = false;

function digit(num) {
  userInput.value += num;
}

function operators(symbols) {
  if (symbols === "1/x") {
    let value = Number(userInput.value);
    if (value === 0) {
      userInput.value = "undefined";
      return;
    }
    let result = 1 / value;
    userInput.value = result.toFixed(1);
    memory.value = `1 / ${value}`;

  }
  else if (symbols === "x^2") {
    let value = Number(userInput.value);
    let result = value ** 2;
    userInput.value = result;
    memory.value = 'sqr' + '(' + value + ')';
  }
  else if (symbols === '√x') {
    let value = Number(userInput.value);
    userInput.value = Math.sqrt(value);
    memory.value = 'sqrt' + '(' + value + ')';
  }
  else {
    memory.value = userInput.value + symbols;
    userInput.value = ''; 
  }

}

function clearAll() {
  userInput.value = "";
  memory.value = "";    
}

function clearOne() {
    memory.value = "";
}

function erase() {
    userInput.value = userInput.value.slice(0, -1);
}

function decimal(deci) {
  userInput.value += deci;
}

function equalsTo() {
  let expression = memory.value + userInput.value;
  

  if (expression.includes("+")) {
    let parts = expression.split("+");
    result = Number(parts[0]) + Number(parts[1]);
    userInput.value = result;
    
  } else if (expression.includes("-")) {
    let parts = expression.split("-");
    result = Number(parts[0]) - Number(parts[1]);
    userInput.value = result;

  } else if (expression.includes("×")) {
    let parts = expression.split("×");
    result = Number(parts[0]) * Number(parts[1]);
    userInput.value = result;

  } else if (expression.includes("÷")) {
    let parts = expression.split("÷");
    result = Number(parts[0]) / Number(parts[1]);
    userInput.value = result;

  } else if (expression.includes("%")) {
    let parts = expression.split("%");
    result = Number(parts[0] / 100);
    userInput.value = result;
  } 

  memory.value = expression;
}


function operator(message) {
    getFirstVal = userInput.value;
    oper = message;
    userInput.value = getFirstVal + message;
    canClear = true2;
}

function equalsToSign() {

}
