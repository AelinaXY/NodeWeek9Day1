const leftPad = require("left-pad");
const calc = require("./calc");

console.log(leftPad("Hello World", 60));

console.log(`${calc.add(5,5)} | ${calc.sub(5,5)} | ${calc.mult(5,5)} | ${calc.div(5,5)}`);
