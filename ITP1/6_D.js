/*
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let l = 0;
let n = 0;
let m = 0;
let A = [];
let b = [];

rl.on("line", (line) => {
  if (l == 0) {
    let nm = line.split(" ", 2).map((i) => parseInt(i, 10));
    n = nm[0];
    m = nm[1];
    A = (n, m) => {
      let res = new Array(n).fill(0);
      for (let i = 0; i < n; i++) {
        res[i] = new Array(m).fill(0);
      }
      return res;
    };
    b = (m) => {
      let res = new Array(m).fill(0);
      return res;
    };
    l++;
  } else if (l > 0 && l < 1 + n) {
    let i = l - 1;
    A[i] = line.split(" ", m).map((i) => parseInt(i, 10));
    l++;
  } else if (l >= 1 + n && l < 1 + n + m) {
    let j = l - 1 - n;
    b[j] = parseInt(line, 10);
    l++;
    if (l >= 1 + n + m) {
      rl.close();
    }
  }
}).on("close", () => {
  let c = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      c[i] += A[i][j] * b[j];
    }
  }
  c.map((v) => {
    console.log(v);
  });
});
*/

/** 最短の Solution は下記。

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var arr0=Arr[0].split(" ").map(Number);
var a=arr0[0];
var b=arr0[1];
Arr.shift();
var nm=Arr.slice(0,a);
var m=(Arr.slice(a,Arr.length)).map(Number);

nm.forEach(function(v){
   var n=v.split(" ").map(Number);
   var sum=0;
   for(var i=0;i<b;i++)sum+=n[i]*m[i];
   console.log(sum);
});

 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input.trim().split("\n");
var arr0 = Arr[0].split(" ").map(Number);
var n = arr0[0];
var m = arr0[1];
Arr.shift();
var a = Arr.slice(0, n);
var b = Arr.slice(n, Arr.length).map(Number);

a.forEach((v) => {
  var ai = v.split(" ").map(Number);
  var sum = 0;
  for (var j = 0; j < m; j++) sum += ai[j] * b[j];
  console.log(sum);
});
