const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
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
      case 0:
        tmp = this.top;
        this.top = this.front;
        this.front = this.bottom;
        this.bottom = this.back;
        this.back = tmp;
        break;
      case 1:
        tmp = this.top;
        this.top = this.back;
        this.back = this.bottom;
        this.bottom = this.front;
        this.front = tmp;
        break;
      case 2:
        tmp = this.top;
        this.top = this.left;
        this.left = this.bottom;
        this.bottom = this.right;
        this.right = tmp;
        break;
      case 3:
        tmp = this.top;
        this.top = this.right;
        this.right = this.bottom;
        this.bottom = this.left;
        this.left = tmp;
        break;
    }
  }

  get val() {
    return this.right;
  }

  roll(top, front) {
    //console.log("top: " + top + ", front: " + front);
    while (this.top != top || this.front != front) {
      let num = (Math.floor(Math.random() * 6) + 1) % 4;
      //console.log("dir: " + num);
      this.move(num);
    }
  }
}

let dice = [];
let n = 0;
let questions = [];

rl.on("line", (line) => {
  if (dice.length == 0) {
    dice = line.trim().split(" ").map(Number);
    cube = new Cube(dice);
  } else if (n == 0) {
    n = parseInt(line.trim());
  } else {
    questions = line.trim().split(" ", 2).map(Number);
    let top = questions[0];
    let front = questions[1];
    cube.roll(top, front);
    console.log(cube.val);
    if (--n == 0) {
      rl.close();
    }
  }
}).on("close", () => {});
