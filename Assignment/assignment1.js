function add(a, b){
    return a + b;
}
console.log(add(5, 3));

// function multi(a, b){
//     return a * b;
// }
// console.log(multi(4, 5));

function eligibleToVoteAndDrive(age, height){
    if (age >= 18 && height >= 6) {
        console.log('You can vote and drive');
    }
    else if (age >= 18 && height < 6) {
        console.log('You can vote, but you cannot drive');
    }
    else if (age < 18 && height >= 6) {
        console.log('you cannot vote, but you can drive');
    }
    else {
        console.log('You cannot vote and drive');
    }
}
eligibleToVoteAndDrive(12, 4)

let i = 0;

const a = i++;
const b = ++i;

console.log(a, b);

let num = 18;

const first = num++;
console.log(first);
// console.log(num);

const second = ++num;
console.log(second);


let olu = 10;
console.log(olu);

let taye = olu++;
console.log(taye);
console.log(olu);

let kenny = ++olu;
console.log(kenny);
console.log(olu);