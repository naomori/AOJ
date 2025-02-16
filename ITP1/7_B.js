let input = require("fs").readFileSync("/dev/stdin", "utf8");
let Arr = input.trim().split("\n");
for (let i = 0; i < Arr.length; i++) {
  let arr = Arr[i].split(" ").map(Number);
  let n = arr[0];
  let x = arr[1];
  if (n == 0 && x == 0) {
    break;
  }
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (i + j >= x) break;
      let k = x - (i + j);
      if (k > j && k <= n) count++;
      /*
      for (let k = j + 1; k <= n; k++) {
        if (i + j + k == x) {
          count++;
        }
      }
        */
    }
  }
  console.log(count);
}
