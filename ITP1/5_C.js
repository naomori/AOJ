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
      for (let w = 0; w < hw[1]; w++) {
        if ((h + w) % 2 == 0) {
          process.stdout.write("#");
        } else {
          process.stdout.write(".");
        }
      }
      process.stdout.write("\n");
    }
    process.stdout.write("\n");
    /*
    for (let h = 0; h < hw[0]; h++) {
      if (h % 2 == 0) {
        for (let w = 0; w < hw[1]; w++) {
          if (w % 2 == 0) {
            process.stdout.write("#");
          } else {
            process.stdout.write(".");
          }
        }
      } else {
        for (let w = 0; w < hw[1]; w++) {
          if (w % 2 == 0) {
            process.stdout.write(".");
          } else {
            process.stdout.write("#");
          }
        }
      }
      process.stdout.write("\n");
    }
    process.stdout.write("\n");
    */
  }
});
