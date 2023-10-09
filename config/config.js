const env =  require('./env.js');

let loadmodule = "./" + env.profile + "Config.js";
const setting = require(loadmodule);
module.exports = setting;