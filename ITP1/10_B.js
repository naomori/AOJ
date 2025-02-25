const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nums = [];

rl.on("line", (line) => {
  nums = line.trim().split(" ", 3).map(Number);
  rl.close();
}).on("close", () => {
  let a = nums[0];
  let b = nums[1];
  let C = nums[2];

  let rad = (C * Math.PI) / 180;

  let sinC = Math.sin(rad);
  let h = sinC * b;

  let S = (a * h) / 2;

  let cosC = Math.cos(rad);
  let x = Math.sqrt(Math.pow(b, 2) + Math.pow(a, 2) - 2 * a * b * cosC);
  let L = a + b + x;

  console.log(S);
  console.log(L);
  console.log(h);
});
