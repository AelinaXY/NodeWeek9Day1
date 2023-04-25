const cow = require("cowsay");
const cowSayFunc = function cowSays(a)
{
    cow.say({'text':a});
}

module.exports = {cowSayFunc};