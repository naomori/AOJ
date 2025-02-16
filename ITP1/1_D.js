const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let S = 0;

rl.on("line", (line) => {
  S = parseInt(line, 10);
  rl.close();
}).on("close", () => {
  let s = S % 60;
  let m = ((S - s) % 3600) / 60;
  let h = (S - m * 60 - s) / 3600;
  console.log(`${h}:${m}:${s}`);
});
