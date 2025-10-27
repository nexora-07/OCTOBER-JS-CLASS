"use strict";

let prm = prompt();
console.log(prm);

if (prm === "a" || prm === "e" || prm === "i" || prm === "o" || prm === "u") {
  console.log("is a vowel");
} else if (prm >= 0 || prm <= 9) {
  console.log("is a number");
} else if (prm >= "@" || prm >= "#") {
  console.log("is a symbol");
} else {
  console.log("is a consonant");
}
