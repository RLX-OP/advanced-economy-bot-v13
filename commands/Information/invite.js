const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	name: 'invite',
	aliases: ['botinvite'],
	run: async (client, message, args) => {
		const row = new MessageActionRow().addComponents(
			new MessageButton()
				.setURL(`${client.config.invitelink}`)
				.setLabel('INVITE')
				.setStyle('LINK')
		);
		message.channel.send({ content: `** Thanks for inviting me! **`, components: [row] });
	}
};
