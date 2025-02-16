const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;

rl.on("line", (line) => {
  n = parseInt(line, 10);
  rl.close();
}).on("close", () => {
  function_call(n);
});

function function_call(n) {
  check_num(1, n);
}

function check_num(i, n) {
  for (let x = i; x <= n; x++) {
    //console.log(x, i, n);
    if (x % 3 == 0) {
      process.stdout.write(" " + x);
    } else {
      let y = x;
      do {
        if (y % 10 == 3) {
          process.stdout.write(" " + x);
          break;
        }
        y = Math.floor(y / 10);
      } while (y);
    }
  }
  process.stdout.write("\n");
}

/*
function check_num(i, n) {
  let x = i;
  if (x % 3 == 0) {
    process.stdout.write(" " + i);
    end_check_num(i, n);
    return;
  }
  include3(x, i, n);
}

function include3(x, i, n) {
  if (x % 10 == 3) {
    process.stdout.write(" " + i);
    end_check_num(i, n);
  } else {
    x = Math.floor(x / 10);
    if (x) {
      include3(x, i, n);
    } else {
      end_check_num(i, n);
    }
  }
}

function end_check_num(i, n) {
  if (++i <= n) {
    check_num(i, n);
  } else {
    process.stdout.write("\n");
  }
}
*/
