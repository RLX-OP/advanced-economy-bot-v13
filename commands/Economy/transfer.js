const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "transfer",
  aliases: ['give', 'share'],
  usage: `transfer <member> <amount>`,
run: async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  let authordata = client.eco.fetchMoney(message.author.id) 
  if (!member) return message.channel.send({ embeds: [new MessageEmbed().setTitle("").setDescription( 'Please mention the person or give their ID' )] });
  let amount = args[1]
  if (!amount || isNaN(amount)) return message.channel.send({ embeds: [new MessageEmbed().setTitle("").setDescription( 'Please enter a valid amount to transfer' )] });
  if(authordata.amount < amount) return message.channel.send({ embeds: [new MessageEmbed().setTitle("").setDescription( 'Looks like you don\'t have that much money' )] });
  await client.eco.transfer(message.author.id, member.id, amount) 
  return message.channel.send({ embeds: [new MessageEmbed().setTitle("").setDescription( `You have successfully transferred 💸**${amount}** to ** ${member.user.tag}**.` )] });
}
};
