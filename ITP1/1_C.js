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
  area = parseInt(numbers[0]) * parseInt(numbers[1]);
  circuit = (parseInt(numbers[0]) + parseInt(numbers[1])) * 2;
  console.log(area, circuit);
});
