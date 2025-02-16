const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;

let a = [];
function cards_0padding(a) {
  a = new Array(4).fill(0);
  for (let i = 0; i < 4; i++) {
    a[i] = new Array(13).fill(0);
  }
  return a;
}
a = cards_0padding(a);

let cards = [];
let marks = "SHCD";
function cards_fill(cards, a) {
  for (let i = 0; i < n; i++) {
    let card = cards[i].split(" ", 2);
    a[marks.indexOf(card[0])][parseInt(card[1], 10) - 1]++;
  }
  return a;
}

rl.on("line", (line) => {
  if (n == 0) {
    n = parseInt(line, 10);
  } else {
    cards.push(line);
    if (cards.length == n) {
      a = cards_fill(cards, a);
      rl.close();
    }
  }
}).on("close", () => {
  for (var m = 0; m < 4; m++) {
    for (var j = 0; j < 13; j++) {
      if (a[m][j] == 0) {
        console.log(marks[m], `${j + 1}`);
      }
    }
  }
});
