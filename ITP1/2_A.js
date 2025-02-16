const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];

rl.on("line", (line) => {
  numbers = line.split(" ", 2);
  rl.close();
}).on("close", () => {
  let a = parseInt(numbers[0]);
  let b = parseInt(numbers[1]);
  if (a < b) {
    console.log("a < b");
  } else if (a > b) {
    console.log("a > b");
  } else {
    console.log("a == b");
  }
});
