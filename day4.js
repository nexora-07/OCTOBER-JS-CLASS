// function: are block of scope that performs a specific task.

// 1. Regular//named function: they are written by using the function keyword, followed by a (), and a {}.

function sayHi(){     //an  anonymous function
    console.log('Hey');
}
sayHi();

//2. Arrow function: is a concise way or shorthand of writing a function. ()=>{}.

const greet = ()=>{
    console.log('hello world!')
}
greet();

Math.floor(Math.random() * 56647478)

//3. A callback function

//setTimeout
//setInterval

const myInterval = setInterval(()=>{
    console.log('Ibrahim should buy me water');
    
}, 9000);
console.log(myInterval);

clearInterval(myInterval)


// const myTimeOut = setTimeout(()=>{
//     console.log('hey you');
    
// }, 3000);
// clearTimeout(myTimeOut)

let fruits = ['carrot', 'pawpaw', 'banana', 'orange']
console.log(fruits);
console.log(fruits[1].length);

let result = fruits.find((items) => items == 'pawpaw');
console.log(result);

//scope
//1. global scope variable : are variables declared outside a function block, and they can be reused in any part of your code.
// 2. local scope variable : are variables declared inside a function scope, and they are limited within the scope.


let userName = 'Salam'; 

function getUsername(){
    console.log(userName);

    userName = 'Dimeji';
    console.log(userName);
        let myName = 'Ethic';

    console.log(myName);

    userName = myName;
    console.log(userName);
    
    
}

getUsername();
console.log(userName);
// console.log(myName);

//named function
function greetUser(){
    console.log('hello');
    console.log('kiki');
    
}
greetUser();

function name(){
    console.log('Joy');
    console.log('Jane');
    console.log('peace');
    console.log('Ojo');
}
name()

//arrow function
const getUserDetails = ()=>{
    console.log('hi');
}
getUserDetails();

const thereAttribute = ()=>{
    console.log('tall');
    console.log('short');
}



//callback function

const thereInterval = setInterval(()=>{
    console.log('hello world!');
}, 2000)
clearInterval(thereInterval)


console.log(Math.floor(Math.random()*4) + 5);




