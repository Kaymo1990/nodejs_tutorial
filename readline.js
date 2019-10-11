const readline = require('readline');
const rl = readline.createInterface({input : process.stdin,
output : process.stdout});

let n1 = Math.floor((Math.random() * 10) + 1);
let n2 = Math.floor((Math.random() * 10) + 1);
let ans = n1 + n2;

rl.question(`What is ${n1} + ${n2}?`, (userInput)=> {
    console.log(userInput);
});