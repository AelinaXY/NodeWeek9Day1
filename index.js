const leftPad = require("left-pad");
const axios = require("axios");
const calc = require("./calc");

// console.log(leftPad("Hello World", 60));

// console.log(`${calc.add(5,5)} | ${calc.sub(5,5)} | ${calc.mult(5,5)} | ${calc.div(5,5)}`);

axios.get('https://pokeapi.co/api/v2/pokemon/meowscarada')
.then(function (response) { console.log(response.data.name +'\n' +
response.data.stats.forEach((m) => (console.log(`STAT: ${m.stat.name} | BASE: ${m.base_stat}`))));});
