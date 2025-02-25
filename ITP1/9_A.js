const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let W = "";
let T = [];
let count = 0;

rl.on("line", (line) => {
  if (W.length == 0) {
    W = line.trim().toLowerCase();
  } else if (line.trim() == "END_OF_TEXT") {
    rl.close();
  } else {
    T = T.concat(line.trim().toLowerCase().split(" "));
  }
}).on("close", () => {
  T.forEach((Ti) => {
    if (Ti === W) {
      count++;
    }
  });
  console.log(count);
});
