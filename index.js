require('./server.js');//this is webserver for hosting it.

const colors = require("colors");//console looks good with colors :)
const { Client, Collection, Intents } = require('discord.js');//module to intract with discord 
const { Manager, db } = require('quick.eco');//our economy module
require('dotenv');//this is env for .env file to work
const client = new Client({
	intents: 32767,
	disableMentions: ['everyone', 'here'],
        shards: "auto"
});

client.eco = new Manager();
client.db = db;
client.config = require('./config.json');
client.commands = new Collection();
client.slashcommands = new Collection();
client.aliases = new Collection();
client.shop = {
	laptop: {
		cost: 2000
	},
	mobile: {
		cost: 1000
	},
	computer: {
		cost: 3000
	} 
};

['commands', 'events', 'slashcommands'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

client.login(process.env.TOKEN);
