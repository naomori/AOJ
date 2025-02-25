const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cards = "";
let m = 0;

rl.on("line", (line) => {
  if (line.trim() == "-") {
    rl.close();
  } else {
    if (cards.length == 0) {
      cards = line.trim().toLowerCase();
    } else if (m == 0) {
      m = parseInt(line.trim());
    } else {
      h = parseInt(line.trim());
      let bottom = cards.slice(0, h);
      let top = cards.slice(h);
      cards = top + bottom;
      if (--m == 0) {
        console.log(cards);
        cards = "";
      }
    }
  }
}).on("close", () => {});
