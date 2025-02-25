const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let str = "";
let q = 0;

rl.on("line", (line) => {
  if (str.length == 0) {
    str = line.trim();
  } else if (q == 0) {
    q = parseInt(line.trim(), 10);
  } else {
    let inst = line.trim().split(" ");
    let a = parseInt(inst[1]);
    let b = parseInt(inst[2]);
    switch (inst[0]) {
      case "print":
        console.log(str.slice(a, b + 1));
        break;
      case "reverse":
        let revstr = str
          .slice(a, b + 1)
          .split("")
          .reverse()
          .join("");
        str = str.slice(0, a) + revstr + str.slice(b + 1, str.length);
        break;
      case "replace":
        str = str.slice(0, a) + inst[3] + str.slice(b + 1, str.length);
        break;
    }
    if (--q == 0) {
      rl.close();
    }
  }
}).on("close", () => {});
