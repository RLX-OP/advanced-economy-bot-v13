const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'weekly',
	aliases: [],
	usage: 'weekly',
	run: async (client, message, args) => {
		let amount = Math.floor(Math.random() * 1000) + 500;
		let addMoney = client.eco.weekly(client.ecoAddUser, amount);
		if (addMoney.onCooldown)
			return message.reply({
				embeds: [
					new MessageEmbed()
						.setTitle('')
						.setDescription(
							`You have already claimed your weekly credit. Come back after ${
								addMoney.time.days
							} days, ${addMoney.time.hours} hours, ${
								addMoney.time.minutes
							} minutes & ${addMoney.time.seconds} seconds to claim it again.`
						)
				]
			});
		else
			return message.reply({
				embeds: [
					new MessageEmbed()
						.setTitle('')
						.setDescription(
							`You have claimed **${
								addMoney.amount
							}** 💸 as your weekly credit & now you have **${
								addMoney.after
							}** 💸. But you will lose your balance if you do not subscribe RLX 😂 Just kidding.`
						)
				]
			});
	}
};
