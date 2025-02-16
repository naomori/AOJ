const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];

rl.on("line", (line) => {
  let xy = line.split(" ", 2).map((i) => parseInt(i, 10));
  if (xy[0] === 0 && xy[1] === 0) {
    rl.close();
  }
  if (xy[0] > xy[1]) {
    let temp = xy[0];
    xy[0] = xy[1];
    xy[1] = temp;
  }
  numbers.push(xy);
}).on("close", () => {
  for (let i = 0; i < numbers.length; i++) {
    // Print an array with spaces between them
    console.log(...numbers[i]);
  }
});
