//functions are block of code that perform a specific task.

//we have different types of fucntions

//1.named/regular function--by using the funcion keyword, function name, followed by (), and {}

function greetUser(){      //anonymous
    console.log('hello');
    
}
greetUser();  //invoking or calling of function

//2. Arrow function-- it is a concise/shorthand way of writing a function. ()=>{}


 const getUserDetails = ()=>{
    console.log('Goood morning');
    
 }
 getUserDetails();


 //3. callback function.

 //setInterval()


 let greetings = 7;
 
 
 const myInterval = setInterval(()=>{
    greetings++;
    console.log(greetings);
    
    
    
 }, 5000);
 console.log(myInterval);

clearInterval(myInterval)
 

//setTimeOut


const myTimeOut = setTimeout(()=>{
    console.log('hey');
    
}, 9000)

clearTimeout(myTimeOut)


//scope variable
//global scope --it means a variable that is decleared outside a function block, and it can reuse outside in any part of our code.
//local scope variable are variables declared within a function block and they are limited with that function


let userName = 'Dotun'; //global scope
let myName;
function sayHi(){
    console.log(userName);

   myName = 'Kiki';
    console.log(myName);
    


    userName =  'Tayo';

    let myNewdetails = 'Job'; //local scope
    console.log(myNewdetails);
    
    
    console.log('say hi');
    
}
sayHi();

console.log(myName);
console.log(userName);



// console.log(myNewdetails);


//argument and parameter
//parameter are more like a variable, they are usually local scope.


function getSum(a, b){
    // console.log(name);
    console.log(a);
    console.log(b);
    
    
    let sum = a + b;
    console.log(sum);
}
getSum(10, 20)
// getSum('Teni');
// getSum('alice')
// getSum('john')