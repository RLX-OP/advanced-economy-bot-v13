let slashcommands = []
const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const { MessageEmbed } = require('discord.js');
const { prefix } = require("../config.json");
// Create a new Ascii table
let table = new ascii("Slash Commands");
table.setHeading("Commands", "Load status");
module.exports = (client) => {
    readdirSync("./SlashCommands/").forEach(dir => {
        const commands = readdirSync(`./SlashCommands/${dir}/`).filter(file => file.endsWith(".js"));
    
        for (let file of commands) {
            let pull = require(`../SlashCommands/${dir}/${file}`);
    
            if (pull.name) {
                client.slashcommands.set(pull.name, pull);
                slashcommands.push(pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌`);
                continue;
            }
    
            }
    });
    
    console.log(table.toString().rainbow);


client.on("ready", async ()=> {

//registering slash commands
await client.application.commands.set(slashcommands)
})

//help menu interaction
client.on('interactionCreate', async interaction => {
	if (!interaction.isSelectMenu()) return;

	let options = interaction.values;
	const economy = options[0];

	if (economy === 'first') {
		const embed1 = new MessageEmbed()
			.setThumbnail(client.user.displayAvatarURL())
			.addField(
				`${client.config.economyemoji} Economy - (11)`,
				`\`balance\`, \`beg\`, \`buy\`, \`daily\`, \`inventory\`, \`leaderboard\`, \`search\`, \`shop\`, \`transfer\`, \`weekly\, \`work\`\n\n[Invite](${
					client.config.invitelink
				}) ● [Support Server](${client.config.server})`
			)
			.setDescription(
				`● To get help on a specific command type ${prefix}help <command>!`
			)
			.setColor('#303037')
			.setFooter(`Thanks For Choosing ${client.user.username}`, client.user.displayAvatarURL())
			.setTimestamp();
		interaction.reply({ embeds: [embed1], ephemeral: true });
		return;
	}

	if (economy === 'third') {
		const embed2 = new MessageEmbed()
			.setThumbnail(client.user.displayAvatarURL())
			.addField(
				`${client.config.owneremoji} Owner - (44)`,
				`\`eval\`, \`reload\`, \`addmoney\`, \`setmoney\`\n\n[Invite](${
					client.config.invitelink
				}) ● [Support Server](${client.config.server})`
			)
			.setDescription(
				`● To get help on a specific command type ${prefix}help <command>!`
			)
			.setColor('#303037')
			.setFooter(`Thanks For Choosing ${client.user.username}`, client.user.displayAvatarURL())
			.setTimestamp();
		interaction.reply({ embeds: [embed2], ephemeral: true });
		return;
	}

	if (economy === 'second') {
		const embed3 = new MessageEmbed()
			.setThumbnail(client.user.displayAvatarURL())
			.addField(
				`${client.config.infoemoji} Information - (6)`,
				`\`developers\`, \`help\`, \`invite\`, \`ping\`, \`stats\`, \`uptime\`\n\n[Invite](${
					client.config.invitelink
				}) ● [Support Server](${client.config.server})`
			)
			.setDescription(
				`● To get help on a specific command type ${prefix}help <command>!`
			)
			.setColor('#303037')
			.setFooter(
				`Thanks For Choosing ${client.user.username}`,
				client.user.displayAvatarURL()
			)
			.setTimestamp();
		interaction.reply({ embeds: [embed3], ephemeral: true });
		return;
	}
});
}