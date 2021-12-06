const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Returns all Commmands, or one specific command',
	options: [
		{
			name: 'command',
			description: 'command name',
			type: 3,
			required: false
		}
	],
  	run: async (client, interaction, args) => {
		if (args[0]) {
			const embed = new MessageEmbed().setColor('#2F3136');
			const cmd =
				client.commands.get(args[0].toLowerCase()) ||
				client.commands.get(client.aliases.get(args[0].toLowerCase()));
			var rlx = false;
			if (!cmd) {
				rlx = client.categories.find(rlx =>
					rlx.toLowerCase().includes(args[0].toLowerCase())
				);
			}
			if (!cmd && (!rlx || rlx == null)) {
				embed.setColor('RED');
				embed.setDescription(`Nothing found for **${args[0].toLowerCase()}**`);
				return interaction.followUp({ embeds: [embed] });
			} else if (!cmd && rlx) {
				var category = rlx;

				const catcommands = client.commands
					.filter(x => x.category === category)
					.map(x => '`' + x.name + '`')
					.join(', ');

				const embed = new MessageEmbed()
					.setColor('#2F3136')
					.setDescription(
						`● To get help on a specific command type \`${prefix}help <command>\`!`
					)
					.setThumbnail(client.user.displayAvatarURL())
					.setTimestamp()
					.addField(
						` **${category} - (${
							client.commands.filter(cmd => cmd.category === category).size
						})**`,
						catcommands
					)
					.setFooter(ee.footertext, client.user.displayAvatarURL());

				return message.channel.send({ embeds: [embed] });
			}
			if (cmd.name) embed.addField(`**Command name**`, `\`${cmd.name}\``);
			if (cmd.name) embed.setTitle(`Detailed Information of | \`${cmd.name}\``);
			if (cmd.description)
				embed.addField('**Description**', `\`${cmd.description}\``);
			if (cmd.aliases)
				try {
					embed.addField(
						'**Aliases**',
						cmd.aliases.length > 0
							? cmd.aliases.map(a => '`' + a + '`').join('\n')
							: 'No Aliases'
					);
				} catch {}
			if (cmd.cooldown)
				embed.addField('**Cooldown**', `\`${cmd.cooldown} Seconds\``);
			else embed.addField('**Cooldown**', `\`3 Seconds\``);
			if (cmd.usage) {
				embed.addField('**Usage**', `\`${prefix}${cmd.usage}\``);
				embed.setFooter('Syntax: <> = required, [] = optional');
			}
			if (cmd.useage) {
				embed.addField('**Usage**', `\`${prefix}${cmd.useage}\``);
				embed.setFooter('Syntax: <> = required, [] = optional');
			}
			embed.setColor();
			return message.channel.send({ embeds: [embed] });
		}

		let helpmenu = new MessageEmbed()
			.setAuthor(
				`${client.user.username} Help Panel`,
				client.user.displayAvatarURL()
			)
			.setDescription(
				`
**Hey ${interaction.member.user}, I am ${client.user}**.
 
**An Advanced Discord Economy Bot**
        
** Help related to ${client.user.username} commands**

**💸 \`:\` ECONOMY**
**<a:hyperpin:879379722193219634> \`:\` INFORMATION**
**👑 \`:\` OWNERS**

[Invite](${client.config.invitelink}) ● [Support Server](${
					client.config.server
				}) 
 `
			)

			.setFooter(
				`Thanks for Using ${client.user.username}`,
				client.user.displayAvatarURL()
			)
			.setColor(`#303037`);

		const row = new MessageActionRow().addComponents(
			new MessageSelectMenu()
				.setCustomId('help')
				.setPlaceholder('❯ Economy Bot Help Menu!')
				.addOptions([
					{
						label: 'Economy',
						description: 'Economy Commands',
						value: 'first',
						emoji: '💸'
					},
					{
						label: 'Information',
						description: 'Information Commands',
						value: 'second',
						emoji: '<:information:915960408974688297>'
					},
					{
						label: 'Owners',
						description: 'Owners Only Commands',
						value: 'third',
						emoji: '👑'
					}
				])
		);
		interaction.followUp({ embeds: [helpmenu], components: [row] });
	}
};
