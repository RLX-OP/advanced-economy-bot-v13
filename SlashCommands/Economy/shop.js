const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "shop",
  description: "buy things from shop",
run: async (client, interaction, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - :dollar: ${client.shop[items[i]].cost}\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("Store")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter("Do ?buy <item> to purchase the item.")
  return interaction.followUp({ embeds: [embed] });
}
};
