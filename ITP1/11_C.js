const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Cube {
  top = 0;
  bottom = 0;
  front = 0;
  back = 0;
  right = 0;
  left = 0;

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

  /*
  get top() {
    return this.top;
  }
  get bottom() {
    return this.bottom;
  }
  get front() {
    return this.front;
  }
  get back() {
    return this.back;
  }
  get right() {
    return this.right;
  }
  get left() {
    return this.left;
  }

  set top(val) {
    this.top = val;
  }
  set bottom(val) {
    this.bottom = val;
  }
  set front(val) {
    this.front = val;
  }
  set back(val) {
    this.back = val;
  }
  set right(val) {
    this.right = val;
  }
  set left(val) {
    this.left = val;
  }
    */

  equals(dice) {
    let another = new Cube(dice);
    if (
      this.top == another.top &&
      this.bottom == another.bottom &&
      this.front == another.front &&
      this.back == another.back &&
      this.right == another.right &&
      this.left == another.left
    ) {
      return true;
    } else {
      return false;
    }
  }

  roll(dice) {
    for (let i = 0; i < 100; ++i) {
      if (this.equals(dice)) {
        return true;
      }
      let num = (Math.floor(Math.random() * 6) + 1) % 4;
      this.move(num);
    }
    return false;
  }
}

let dice = [];
let cube1;

rl.on("line", (line) => {
  if (dice.length == 0) {
    dice = line.trim().split(" ").map(Number);
    console.log(dice);
    cube1 = new Cube(dice);
  } else {
    dice = line.trim().split(" ").map(Number);
    if (cube1.roll(dice)) {
      console.log("Yes");
    } else {
      console.log("No");
    }
    rl.close();
  }
}).on("close", () => {});
