const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input_str = [];

rl.on("line", (line) => {
  if (line.trim() == "0") {
    rl.close();
  }
  input_str.push(line.trim());
}).on("close", () => {
  input_str.forEach((line) => {
    let sum = 0;
    for (let i = 0; i < line.length; i++) {
      sum += parseInt(line.charAt(i), 10);
    }
    console.log(sum);
  });
});
