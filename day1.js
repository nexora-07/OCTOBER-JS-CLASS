// there are 3 ways of returning an output in js
// 1. console.log()
// 2. alert
// 3. return
// 4. prompt()

// alert('Good morning')
// variables are containers for storing information 
// there are different ways of naming variables
// 1. Hungarian case
// 2. pascal case e.g user-name
// 3. kebab case e.g 123username, User_name
// 4. snake case
// 5. camel case  : this is the best method of naming variables e.g userName, myName, userDetails, fruitArray

// declaration of variables.
// there are 3 ways of declaring variables.

// 1. using the keyword LET: the variable can be redeclared and be reassigned.

let myName;
console.log(myName);

myName = "Kiki";
console.log(myName);

myName = "Eniiyi"
console.log(myName);
console.log(typeof myName);


// 2. using the keyword CONST: you cannot redeclare neither can you assign
const fruit = 'orange';
console.log(fruit);

// fruit = mango;
// console.log(fruit);

// 3. using the keyword VAR

// DATA TYPES
// there are 2 categories of data types in js

// A. primitive data types (immutables):
// 1. string: characters wrapped quotes
let day = 'Tuesday';
console.log(day);
console.log(typeof day);

day= "30";
console.log(day);


let userDetails = "my name is Kiki, I live in Ile-Ife";
console.log(userDetails)

let sum = userDetails + ' ' + day;
console.log(sum);

let age = 20;
console.log(age);
console.log(typeof age);

userDetails = "I am kiki."+ ' ' + "I am" + ' ' + age + ' ' + "years old.";
console.log(userDetails);

let newAge = "20";
sum = newAge +  age;
console.log(sum);
console.log(typeof sum);

// Template literal
userDetails = `my name is ${myName}, i live in Ibadan, i am ${sum} years old.`;
console.log(userDetails);

// boolean: true or false.
let heisAlive = true;
console.log(heisAlive);
console.log(typeof heisAlive);

let hisAge = null;
console.log(hisAge);

hisAge = 1889;
console.log(hisAge);

hisAge = '';
console.log(hisAge);

let herAge;
console.log(herAge);

// Non-primitive data types
// object are collection of key-value pairs or key-pair values.

let userObj = {
    name: "Kiki",
    Age: 21,
    sheisAlive: true,
    dob: new Date().toLocaleDateString(),

    // nested object
    address: {                
        city: 'Ibadan',
        state: 'oyo',
        place: 'challenge'
    }
}

console.log(userObj);
console.log(typeof userObj);

// 2 ways of manipulating an object
// 1. .
// 2. []
console.log(userObj.name);
console.log(userObj.dob);
console.log(userObj['Age']);    
console.log(userObj['dob']);
console.log(userObj['address'] ['state']);
console.log(userObj.address.city);
console.log(userObj['address'].city);
console.log(userObj.sheisAlive);
console.log(userObj['address']['place']);
console.log(userObj.address.place);


// DATA DESTRUCTURING

const {name, Age, sheisAlive, dob, address} = userObj;
console.log(myName);
console.log(address.place);


// Array: containers for storing values. it is bigger than object. Arrays have lengt and index.
let arr = [];
console.log(arr);
console.log(typeof arr);

let fruitArr = ['orange', 'mango', 'cashew', 'apple', 'watermelon', 'pawpaw'];
console.log(fruitArr);
console.log(fruitArr[0]);
console.log(fruitArr[2][0]);
console.log(fruitArr[3][3]);