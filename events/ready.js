const Discord = require("discord.js");
module.exports.run = client => {
	console.log(`${client.user.tag} is online!`);
	client.user.setActivity('Made by RLX'); // Dont remove Made by RLX or I'll sue u!!
// ----------------------------------------------------------------------------------
console.log(`Logged in as ${client.user.tag}!`.bgBlue.black)
console.log(`Discord.js Version: ${Discord.version}`.bgWhite.black)
console.log(`Node.js Version: ${process.version} `.bgYellow.black);
};
