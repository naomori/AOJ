const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];

rl.on("line", (line) => {
  numbers = line.split(" ", 3);
  rl.close();
}).on("close", () => {
  let a = parseInt(numbers[0], 10);
  let b = parseInt(numbers[1], 10);
  let c = parseInt(numbers[2], 10);
  if (a < b && b < c) {
    console.log("Yes");
  } else {
    console.log("No");
  }
});
