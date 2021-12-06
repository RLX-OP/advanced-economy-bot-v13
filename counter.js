const { db } = require('quick.eco');

function counter(message, interaction, client) {
	let channel = message.channel;
	let count = db.fetch(`counter_${message.guild.id}`);
	if (count === null)
		count = db.set(`counter_${message.guild.id}`, {
			number: 0,
			author: message.member.user.id || interaction.member.user.id
		});

	if (!message.author.bot && message.author.id === count.author) {
		message.delete();
		message
			.reply({ content: 'Please wait for your turn' })
			.then(m => m.delete(3000));
		return;
	}
	if (!message.author.bot && isNaN(message.content)) {
		message.delete();
		message
			.reply({ content: 'messages in this channel must be a number' })
			.then(m => m.delete(3000));
		return;
	}
	if (!message.author.bot && parseInt(message.content) !== count.number + 1) {
		message.delete();
		message
			.reply({ content: `next number must be ${count.number + 1}` })
			.then(m => m.delete(3000));
		return;
	}
	count = db.set(`counter_${message.guild.id}`, {
		number: count.number + 1,
		author: message.author.id
	});
	channel.setTopic(`Next number must be ${count.number + 1}.`);
}

module.exports = counter;
