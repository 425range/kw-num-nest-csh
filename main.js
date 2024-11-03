#!/usr/bin/env node
const lib = require("./lib");

let command = process.argv[2];

let numbers = process.argv
  .slice(3, process.argv.length)
  .map((n) => parseFloat(n));

if (numbers.length === 0) {
  console.log("Insufficient parameter");
}

// parameter 개수 적으면 에러
if (numbers.some((n) => isNaN(n))) {
  console.log("Some arguments are not numbers!");
  process.exit(1);
}

let result;
switch (command) {
  case "avg":
    result = lib.avg(numbers);
    break;
  case "prime":
    result = lib.prime(numbers[0]);
    break;
  case "factorial":
    result = lib.factorial(numbers[0]);
    break;
  default:
    console.log("Wrong command!");
    process.exit(1);
}
console.log(result);
