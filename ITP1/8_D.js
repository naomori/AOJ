const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let s = "";
let p = "";

rl.on("line", (line) => {
  if (s.length == 0) {
    s = line.trim();
    s += s;
  } else {
    p = line.trim();
    rl.close();
  }
}).on("close", () => {
  if (s.includes(p)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
});
