const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nums = [];

rl.on("line", (line) => {
  nums = line.trim().split(" ", 4).map(Number);
  rl.close();
}).on("close", () => {
  let res = Math.sqrt(
    Math.pow(nums[2] - nums[0], 2) + Math.pow(nums[3] - nums[1], 2)
  );
  console.log(res);
});
