const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;

function build_a() {
  let a = new Array(4).fill(0);
  for (let i = 0; i < 4; i++) {
    a[i] = new Array(3).fill(0);
    for (let j = 0; j < 3; j++) {
      a[i][j] = new Array(10).fill(0);
    }
  }
  return a;
}
let a = build_a();

function bfrv_fill(bfrv_array, a) {
  for (let i = 0; i < n; i++) {
    let bfrv = bfrv_array[i];
    a[bfrv[0] - 1][bfrv[1] - 1][bfrv[2] - 1] += bfrv[3];
  }
  return a;
}

let bfrv_array = [];
for (let i = 0; i < n; i++) {
  bfrv_array[i] = new Array(4).fill(0);
}

rl.on("line", (line) => {
  if (n == 0) {
    n = parseInt(line, 10);
  } else {
    bfrv_array.push(line.split(" ", 4).map((i) => parseInt(i, 10)));
    if (bfrv_array.length == n) {
      a = bfrv_fill(bfrv_array, a);
      rl.close();
    }
  }
}).on("close", () => {
  for (var b = 0; b < 4; b++) {
    for (var r = 0; r < 3; r++) {
      for (var v = 0; v < 10; v++) {
        process.stdout.write(" " + a[b][r][v]);
      }
      process.stdout.write("\n");
    }
    if (b == 3) {
      break;
    }
    for (var i = 0; i < 20; i++) {
      process.stdout.write("#");
    }
    process.stdout.write("\n");
  }
});
