// iv. comparison opertaors: ==, ===, !=, !==, >, <, >=, <=

let firstColor = 'green';
let secondColor = 'blue';
let thirdColor = 'Green';
let fourthColor = 'red';

console.log(firstColor == thirdColor);
console.log(firstColor === thirdColor);

let num1 = 10;
let num2 = '10';
let num3 = 20;

console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 == num3);
console.log(num1 === num3);
console.log(num1 != num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

//v. logical operators : &&(and), ||(or)
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true && true);

console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(true || true);

console.log(true && false || false && true || true && false);
console.log(1 && false && true || false || false && true);

console.log(false || true);

let userObj = {
    name: 'kiki',
    age: 22,
    gender: "female",
    isAlive: true? 'yes, she is' : 'No, she is not',
}

console.log(userObj.isAlive);