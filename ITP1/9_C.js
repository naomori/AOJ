const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let taro = 0;
let hanako = 0;

rl.on("line", (line) => {
  if (n == 0) {
    n = parseInt(line.trim());
  } else {
    let cards = line.trim().split(" ", 2);
    if (cards[0] == cards[1]) {
      taro += 1;
      hanako += 1;
    } else if (cards[0] > cards[1]) {
      taro += 3;
    } else {
      hanako += 3;
    }
    if (--n == 0) {
      rl.close();
    }
  }
}).on("close", () => {
  console.log(taro.toString() + " " + hanako.toString());
});
