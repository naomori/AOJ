let input = require("fs").readFileSync("/dev/stdin", "utf8");
let Arr = input.trim().split("\n");
let arr0 = Arr[0].split(" ").map(Number);
let r = arr0[0];
let c = arr0[1];
Arr.shift();
let r_sum = new Array(c + 1).fill(0);
for (let i = 0; i < Arr.length; i++) {
  let arr = Arr[i].split(" ", c).map(Number);
  let c_sum = arr.reduce((x, y) => x + y, 0);
  console.log(arr.join(" ") + " " + c_sum);
  for (let j = 0; j < arr.length; j++) {
    r_sum[j] += arr[j];
  }
  r_sum[c] += c_sum;
}
console.log(r_sum.join(" "));
