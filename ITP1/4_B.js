/*
標準入力からの読み込みは下記のコードでも実現できる
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let r = 0;
const pi = 3.141592653589;

rl.on("line", (line) => {
  r = parseFloat(line, 10);
  rl.close();
}).on("close", () => {
  let area = r * r * pi;
  let circle = r * 2 * pi;
  console.log(area.toFixed(6) + " " + circle.toFixed(6));
});
