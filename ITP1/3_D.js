const readline = require("readline");
const { start } = require("repl");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let start_num;
let end_num;
let target;
let count = 0;

rl.on("line", (line) => {
  let numbers = line.split(" ", 3).map((i) => parseInt(i, 10));
  start_num = numbers[0];
  end_num = numbers[1];
  target = numbers[2];
  rl.close();
}).on("close", () => {
  for (let i = start_num; i < end_num + 1; i++) {
    if (target % i === 0) {
      count++;
    }
  }
  console.log(count);
});
