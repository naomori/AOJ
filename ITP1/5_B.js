const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let hw_array = [];

rl.on("line", (line) => {
  let hw = line.split(" ", 2).map((i) => parseInt(i, 10));
  if (hw[0] == 0 && hw[1] == 0) {
    rl.close();
  }
  hw_array.push(hw);
}).on("close", () => {
  for (hw of hw_array) {
    for (let h = 0; h < hw[0]; h++) {
      if (h == 0 || h == hw[0] - 1) {
        for (let w = 0; w < hw[1]; w++) {
          process.stdout.write("#");
        }
      } else {
        for (let w = 0; w < hw[1]; w++) {
          if (w == 0 || w == hw[1] - 1) {
            process.stdout.write("#");
          } else {
            process.stdout.write(".");
          }
        }
      }
      process.stdout.write("\n");
    }
    process.stdout.write("\n");
  }
});

/*
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input.split("\n");
var str = "";
for (var i = 0; i < Arr.length; i++) {
  var arr = Arr[i].split(" ").map(Number);
  var h = arr[0];
  var w = arr[1];
  if (h === 0 && w === 0) break;
  if (i !== 0) str += "\n";
  var W = Array(w + 1).join("#") + "\n";
  str += W;
  for (var j = 1; j < h - 1; j++)
    str += "#" + Array(w - 1).join(".") + "#" + "\n";
  str += W;
}
console.log(str);
*/
