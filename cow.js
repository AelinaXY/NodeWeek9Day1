const cow = require("cowsay");
function cowSays(a)
{
    return cow.say({'text':a});
}

module.exports = {cowSays};