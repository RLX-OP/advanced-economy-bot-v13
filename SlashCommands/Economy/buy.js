const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "buy",
  description: "buy things from shop",
        options: [
                {
                name: "item",
                        description: "name of the item you want to purchase",
                        type: 3,
                        required: true
                }
        ],
        run: async (client, interaction, args) => {
  let userBalance = client.eco.fetchMoney(interaction.member.user.id);
  if (userBalance.amount < 1) return interaction.followUp({ embeds: [new MessageEmbed().setTitle("").setDescription("Looks like you are poor." )] });
  let item = interaction.option.getString("item")
  if (!item) return interaction.followUp({ embeds: [new MessageEmbed().setTitle("").setDescription("What are you trying to buy?" )] });
  let hasItem = client.shop[item.toLowerCase()];
  if (!hasItem || hasItem == undefined) return interaction.followUp({ embeds: [new MessageEmbed().setTitle("").setDescription("That item doesn't exist lol." )] });
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return interaction.followUp({ embeds: [new MessageEmbed().setTitle("").setDescription("Your balance is insufficient. You need :dollar: "+hasItem.cost+" to buy this item." )] });
  let buy = client.eco.removeMoney(interaction.member.user.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`items_${interaction.member.user.id}`, itemStruct);
  return interaction.followUp({ embeds: [new MessageEmbed().setTitle("").setDescription(`You purchased **${item}** for **:dollar: ${hasItem.cost}**.` )] });
}
};
