const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];

rl.on("line", (line) => {
  let n = parseInt(line, 10);
  if (n === 0) {
    rl.close();
  }
  numbers.push(n);
}).on("close", () => {
  for (let i = 0; i < numbers.length; i++) {
    console.log(`Case ${i + 1}: ${numbers[i]}`);
  }
});
