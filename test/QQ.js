/*
class MutliplicationTables {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  printMultiplicationTable() {
    for (let i = 1; i <= this.right; i++) {
      for (let j = 1; j <= this.left; j++) {
        console.log(`${i}x${j}=${i * j}`);
      }
    }
  }
}

m = new MutliplicationTables(9, 9);
m.printMultiplicationTable();
*/

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i}x${j}=${i * j}`);
  }
}
