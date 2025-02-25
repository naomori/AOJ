const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let nums = [];
let direction = [];

rl.on("line", (line) => {
  if (nums.length == 0) {
    nums = line.trim().split(" ").map(Number);
  } else {
    direction = line.trim().split("");
    rl.close();
  }
}).on("close", () => {
  let cube = new Cube(nums);
  for (let dir of direction) {
    cube.move(dir);
  }
  console.log(cube.val);
});

class Cube {
  constructor(nums) {
    this.top = nums[0];
    this.bottom = nums[5];
    this.front = nums[1];
    this.back = nums[4];
    this.right = nums[2];
    this.left = nums[3];
  }
  move(dir) {
    let tmp;
    switch (dir) {
      case "N":
        tmp = this.top;
        this.top = this.front;
        this.front = this.bottom;
        this.bottom = this.back;
        this.back = tmp;
        break;
      case "S":
        tmp = this.top;
        this.top = this.back;
        this.back = this.bottom;
        this.bottom = this.front;
        this.front = tmp;
        break;
      case "E":
        tmp = this.top;
        this.top = this.left;
        this.left = this.bottom;
        this.bottom = this.right;
        this.right = tmp;
        break;
      case "W":
        tmp = this.top;
        this.top = this.right;
        this.right = this.bottom;
        this.bottom = this.left;
        this.left = tmp;
        break;
    }
  }

  get val() {
    return this.top;
  }
}
