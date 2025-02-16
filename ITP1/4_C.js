/*
改行区切りの文字列を読み込む方法としては下記もある。
let list = require('fs').readFileSync('/dev/stdin', 'utf8').split("\n");
for(let i=0; i < list.length; i++){
    let li = list[i].split(" ");
    let x = parseInt(li[0]);
    let op = li[1];
    let y = parseInt(li[2]);
}
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let expression = [];
let expressions = [];
let a, op, b;

rl.on("line", (line) => {
  expression = line.split(" ", 3);
  a = expression[0];
  op = expression[1];
  b = expression[2];
  if (op === "?") {
    //console.log(expressions);
    rl.close();
  }
  expressions.push([a, op, b]);
}).on("close", () => {
  for (expression of expressions) {
    a = expression[0];
    op = expression[1];
    b = expression[2];
    switch (op) {
      case "+":
        console.log(parseInt(a) + parseInt(b));
        break;
      case "-":
        console.log(parseInt(a) - parseInt(b));
        break;
      case "*":
        console.log(parseInt(a) * parseInt(b));
        break;
      case "/":
        let f = parseInt(a) / parseInt(b);
        console.log(Math.floor(f));
        break;
      default:
        console.log(`Invalid operator. ${op}`);
        break;
    }
  }
});
