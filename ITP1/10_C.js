const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;

rl.on("line", (line) => {
  if (n == 0) {
    n = parseInt(line.trim(), 10);
    if (n == 0) {
      rl.close();
    }
  } else {
    let S = line.trim().split(" ").map(Number);
    let sum = S.reduce((acc, s) => acc + s, 0);
    let avg = sum / n;
    let std = Math.sqrt(
      S.reduce((acc, s) => acc + Math.pow(s - avg, 2), 0) / n
    );
    console.log(std);
    n = 0;
  }
}).on("close", () => {});
