const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "inventory",
  aliases: ["inv"],
  usage: `inv`,
run: async (client, message, args) => {

  const embed = new MessageEmbed()
    .setAuthor(`Inventory of ${message.author.tag}`, message.guild.iconURL)
    .setColor("RANDOM")
    .setThumbnail()
    .setTimestamp();
  const x = client.db.get(`items_${message.author.id}`);
if(!x) { return message.channel.send({ content: `No Items Found To Display` }); }
const arrayToObject = x.reduce((itemsobj, x) => {
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 3;
    return itemsobj;
}, {});
const result = Object.keys(arrayToObject).map(k => embed.setDescription(`Name: ${k}
Quantity: **${arrayToObject[k]}**`, false));
  
 
  return message.channel.send({ embeds: [embed] });
}
}

