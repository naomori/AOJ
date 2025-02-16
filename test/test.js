console.log("Hello world!");

const plus1 = (x) => x + 1;
console.log(plus1(2));

const square = (x) => x * x;
y = 4;
plus1(y);
console.log(square(plus1(y)));

let a = [];
a.push(1, 2, 3);
b = a.reverse();
console.log(b);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

let p = new Point(3, 4);
console.log(p.distance());
