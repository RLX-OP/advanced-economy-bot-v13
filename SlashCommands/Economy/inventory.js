const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "inventory",
  description: "check your inventory",
run: async (client, interaction, args) => {

  const embed = new MessageEmbed()
    .setAuthor(`Inventory of ${interaction.member.user.tag}`, interaction.guild.iconURL)
    .setColor("RANDOM")
    .setThumbnail()
    .setTimestamp();
  const x = client.db.get(`items_${interaction.member.user.id}`);
if(!x) { return interaction.followUp({ embeds: [new MessageEmbed().setTitle("").setDescription( `No Items Found To Display` )] }); }
const arrayToObject = x.reduce((itemsobj, x) => {
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
}, {});
const result = Object.keys(arrayToObject).map(k => embed.setDescription(`Name: ${k}
Quantity: **${arrayToObject[k]}**`, false));
  
 
  return interaction.followUp({ embeds: [embed] });
}
}

