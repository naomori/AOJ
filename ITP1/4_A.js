/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];

rl.on("line", (line) => {
  numbers = line.split(" ", 2).map((i) => parseInt(i, 10));
  rl.close();
}).on("close", () => {
  let d = Math.floor(numbers[0] / numbers[1]);
  let r = numbers[0] % numbers[1];
  let f = numbers[0] / numbers[1];
  console.log(d, r, f.toFixed(8));
  //console.log(d, r, f);
});
*/

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input.split(" ").map(Number);
var a = arr[0];
var b = arr[1];
var d = Math.floor(a / b);
var r = a % b;
var f = (a / b).toFixed(5);
console.log(d + " " + r + " " + f);
