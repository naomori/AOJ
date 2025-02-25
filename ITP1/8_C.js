const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input_str = "";
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let count = new Array(alphabet.length).fill(0);

rl.on("line", (line) => {
  input_str += line.trim();
}).on("close", () => {
  const toLowerCase = (c) => {
    if (/[A-Z]/.test(c)) {
      return c.toLowerCase();
    } else if (/[a-z]/.test(c)) {
      return c;
    } else {
      return false;
    }
  };

  for (let i = 0; i < input_str.length; i++) {
    x = toLowerCase(input_str[i]);
    if (x) {
      count[alphabet.indexOf(x)] += 1;
    }
  }

  for (let i = 0; i < count.length; i++) {
    console.log(alphabet[i] + " : " + count[i]);
  }
});
