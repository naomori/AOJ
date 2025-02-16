const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let a = [];

rl.on("line", (line) => {
  if (n == 0) {
    n = parseInt(line, 10);
  } else if (a.length == 0) {
    a = line.split(" ", n).map((i) => parseInt(i, 10));
    rl.close();
  }
}).on("close", () => {
  let min = 1000000;
  let max = -1000000;
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
    }
    if (a[i] > max) {
      max = a[i];
    }
    sum += a[i];
  }
  console.log(min + " " + max + " " + sum);
});
