module.exports.run = async (client, message) => {
	if (!message.guild || message.author.bot) return;
	if (message.channel.id === client.config.channel)
		require('../counter')(message, client);
	client.prefix = client.db.fetch(`prefix_${message.guild.id}`)
		? client.db.fetch(`prefix_${message.guild.id}`)
		: client.config.prefix;
	if (!message.content.startsWith(client.prefix)) return;
	let args = message.content
		.slice(client.prefix.length)
		.trim()
		.split(' ');
	let commandName = args.shift().toLowerCase();
	let command =
		client.commands.get(commandName) ||
		client.commands.get(client.aliases.get(commandName));
	if (!command) return;
	client.ecoAddUser = message.author.id;
	if (command) command.run(client, message, args);
};
