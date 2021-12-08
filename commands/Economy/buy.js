const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "buy",
  aliases: [],
  usage: `buy <item>`,
        run: async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send({ embeds: [new MessageEmbed().setTitle("").setDescription( "Looks like you are poor.")] });
  let item = args.join(" ");
  if (!item) return message.channel.send({ embeds: [new MessageEmbed().setTitle("").setDescription( "What are you trying to buy?")] });
  let hasItem = client.shop[item.toLowerCase()];
  if (!hasItem || hasItem == undefined) return message.reply({ embeds: [new MessageEmbed().setTitle("").setDescription( "That item doesnt exists lol" )] });
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return message.reply({ embeds: [new MessageEmbed().setTitle("").setDescription( "Your balance is insufficient. You need :dollar: "+hasItem.cost+" to buy this item." )] });
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send({ embeds: [new MessageEmbed().setTitle("").setDescription( `You purchased **${item}** for **:dollar: ${hasItem.cost}**.` )] });
}
};
