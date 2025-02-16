const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];

rl.on("line", (line) => {
  numbers = line.split(" ", 5).map((i) => parseInt(i, 10));
  rl.close();
}).on("close", () => {
  console.log(rectangle(numbers));
});

function rectangle(nums) {
  let W = nums[0];
  let H = nums[1];
  let x = nums[2];
  let y = nums[3];
  let r = nums[4];
  let minx = x - r;
  let miny = y - r;
  let maxx = x + r;
  let maxy = y + r;

  if (minx < 0 || miny < 0 || maxx > W || maxy > H) {
    return "No";
  } else {
    return "Yes";
  }
}
