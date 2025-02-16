let input = require("fs").readFileSync("/dev/stdin", "utf8");
let Arr = input.trim().split("\n");
for (let i = 0; i < Arr.length; i++) {
  let arr = Arr[i].split(" ").map(Number);
  let m = arr[0];
  let f = arr[1];
  let r = arr[2];
  if (m == -1 && f == -1 && r == -1) {
    break;
  }
  if (m == -1 || f == -1) {
    console.log("F");
  } else if (m + f >= 80) {
    console.log("A");
  } else if (m + f >= 65 && m + f < 80) {
    console.log("B");
  } else if (m + f >= 50 && m + f < 65) {
    console.log("C");
  } else if (m + f >= 30 && m + f < 50) {
    if (r >= 50) {
      console.log("C");
    } else {
      console.log("D");
    }
  } else {
    console.log("F");
  }
}
