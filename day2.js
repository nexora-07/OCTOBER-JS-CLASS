// Every method is a function, but not every function is a method.

'use strict';

let myRobot = {
    dancing: function(){
        console.log('i am dancing');
    },
    jump: function(){
        console.log('i am jumping');
    }
}

// console.log(myRobot);
// console.log(myRobot.dancing);

myRobot.dancing()
myRobot.jump()

// string method

let str = 'Kiki is a lady with Aura';
console.log(str);

// i. length
console.log(str.length); // 24

// ii. charAt()
console.log(str.charAt(13)); //y

//includes(values)
console.log(str.includes());

//startswith(value)
console.log(str.startsWith('Kiki'));

//endsWith(value)
console.log(str.endsWith('Aura'));


// iii. at()
console.log(str.at(2));

// iv. slice --  to remove items
console.log(str.slice(3, 8));
console.log(str.slice(8, 22));

//v. lastIndexOf()
console.log(str.lastIndexOf('a'));

//vi. concat
console.log(str.concat(". She is so beautiful"));

//vii. toUpperCase()
console.log(str.toUpperCase());

//viii. toLowerCase()
console.log(str.toLowerCase());

let greet = ' hey ';
console.log(greet);

//ix. 
console.log(greet.trim());
console.log(greet.trimEnd());

// Number method

// i. to convert string to number

let num = '56.78';
console.log(num);
// a. Number
console.log(Number(num));

// b. parseFloat
console.log(parseFloat(num));

// c. parseInt
console.log(parseInt(num));

// d. using addition operator
console.log(+num);


// to convert number to string
let digit = 26.59;
console.log(digit);

// toString()
console.log(digit.toString());

// toFixed()
console.log(digit.toFixed()); //does the same has ceil

//  toExponential()
console.log(digit.toExponential());

//  toPrecision()
console.log(digit.toPrecision());


// Math Methods
// ceil
console.log(Math.ceil(10.2));

//round
console.log(Math.round(20.4)); //round up or down iykyk

//floor
console.log(Math.floor(10.355)); //round the number dowm

//random
console.log(Math.random());

console.log (Math.floor(Math.random() * 3));

//sqrt
console.log(Math.sqrt(4));

// OPERATORS
// Arithmetic operators -- +, -, *, /, **, %

let myNum1 = 10;
let myNum2 = '10';
let myNum3 = 20;

//addition
console.log(myNum1 +  +myNum2);
let  sumEl = myNum1 + myNum3;
console.log(sumEl);

//subtraction
let diff = myNum3 - myNum1;
console.log(diff);

diff = myNum3 - myNum2;
console.log(diff);

//multiplication
let multi = myNum2 * myNum1;
console.log(multi);

//division
let div = myNum1 / myNum2;
console.log(div);

div = myNum3 / 4
console.log(div);

//expo

let expo = myNum1 ** 2;
console.log(expo);

expo = 7 ** 2;
console.log(expo);

//modulus
let mod = 7 % 2;
console.log(mod);

// Assignment operators, addition assignment and sub assignment operators +=, -=

sumEl = 20 + 10;
console.log(sumEl);

sumEl +=  myNum3;
console.log(sumEl);

sumEl += ` my name is Kiki, i am ${sumEl}. I live in Ife.`;
console.log(sumEl);

sumEl -=  myNum2
console.log(sumEl);

// post/pre increment, post/pre decrement

let count = 1;
console.log(count);

let firstCount = count++;
console.log(firstCount);
console.log(count);

console.log(++count);

let secondCount = ++count;
console.log(secondCount);

let fourthCount = --count;
console.log(fourthCount);

let fifthCount = count--;
console.log(fifthCount);
console.log(count);

function add(a, b){
    return a + b;
}
console.log(add(5, 3));

let calculator = {
    add: function(a, b){
    return a + b;
    }
};

console.log(calculator.add(5, 3));

let name = 'Kiki';
let greeting =`Hello, ${name}!`;
console.log(greeting);

let fruit = ['apple', 'mango', 'grape', 'strawberry'];
console.log(fruit[3]);
console.log(fruit[1]);

let countNumber = 2;
console.log(countNumber);


let first = countNumber++;
console.log(first);
console.log(countNumber);

let second = countNumber--;
console.log(second)
console.log(countNumber);

let third = --countNumber;
console.log(third);
// console.log(countNumber);


//object for dog
let dog = {
    Food: 'indomie waste',
    age: 2,
    canWalk: true,
    actions: function(){
        console.log('is barking');
    }
}
dog.actions();


let javaScriptIsFun = true;
console.log(typeof true);
console.log(typeof javaScriptIsFun);

// console.log(typeof null);

let x = 100;
x--;
console.log(x);
x--;
console.log(x);

// let favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

function calcAge1(birthYear) {
    return 1991 - birthYear
}

let age1 = calcAge1(2007);
console.log(age1);






