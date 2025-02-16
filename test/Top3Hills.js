const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];

rl.on("line", (line) => {
  numbers.push(parseInt(line, 10));
  if (numbers.length == 10) {
    rl.close();
  }
}).on("close", () => {
  r = sort(numbers);
  for (let i = 0; i < r.length; i++) {
    console.log(r[i]);
  }
});

function sort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums.slice(0, 3);
}
