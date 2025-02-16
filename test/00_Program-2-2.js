const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];

rl.on("line", (line) => {
  numbers.push(parseInt(line, 10));
  if (numbers[0] == numbers.length - 1) {
    rl.close();
  }
}).on("close", () => {
  n = numbers[0];
  numbers.shift();
  //console.log(`n:${n}, numbers:${numbers}`);
  console.log(sort(numbers, n));
});

function sort(r, n) {
  let maxv = -2000000000;
  let minv = r[0];

  for (let i = 1; i < n; i++) {
    if (maxv <= r[i] - minv) {
      maxv = r[i] - minv;
    }
    if (minv >= r[i]) {
      minv = r[i];
    }
  }
  return maxv;
}
