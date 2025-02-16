const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;

rl.on("line", (line) => {
  n = parseInt(line, 10);
  rl.close();
}).on("close", () => {
  let r = n * n * n;
  console.log(r);
});
