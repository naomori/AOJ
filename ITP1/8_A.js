const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input_str = "";

rl.on("line", (line) => {
  input_str = line;
  rl.close();
}).on("close", () => {
  const isUpperCase = (c) => {
    return /[A-Z]/g.test(c);
  };
  const isLowerCase = (c) => {
    return /[a-z]/g.test(c);
  };

  for (let i = 0; i < input_str.length; i++) {
    if (isLowerCase(input_str[i])) {
      process.stdout.write(input_str[i].toUpperCase());
    } else if (isUpperCase(input_str[i])) {
      process.stdout.write(input_str[i].toLowerCase());
    } else {
      process.stdout.write(input_str[i]);
    }
  }
  process.stdout.write("\n");
});
