let input = require("fs").readFileSync("/dev/stdin", "utf8");
let Arr = input.trim().split("\n");

let arr0 = Arr[0].split(" ").map(Number);
let n = arr0[0];
let m = arr0[1];
let l = arr0[2];
Arr.shift();

let a = Arr.slice(0, n).map((v) => {
  return v.split(" ").map(Number);
});

let b = Arr.slice(n, n + m).map((v) => {
  return v.split(" ").map(Number);
});

let fill_c = (n, l) => {
  let c = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    c[i] = new Array(l).fill(0);
  }
  return c;
};
let c = fill_c(n, l);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < l; j++) {
    for (let k = 0; k < m; k++) {
      c[i][j] += a[i][k] * b[k][j];
    }
  }
}

c.forEach((v) => {
  console.log(v.join(" "));
});
