const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "transfer",
  description: "give your money to others",
options: [
        {
                name: "user",
                description: "choose a member whome you want to give/transfer money",
                type: 6,
                required: true
        },
        {
                name: "amount",
                description: "specify the money to be given",
                type: 3,
                required: true
        }
],
run: async (client, interaction, args) => {
  let member = interaction.options.getMember("member") 
  let authordata = client.eco.fetchMoney(interaction.member.user.id) 
  let amount = interaction.options.getString("amount");
  if (isNaN(amount)) return interaction.followUp({ embeds: [new MessageEmbed().setTitle("").setDescription( 'Please enter a valid amount to transfer' )] });
  if(authordata.amount < amount) return interaction.followUp({ embeds: [new MessageEmbed().setTitle("").setDescription( 'Looks like you don\'t have that much money' )] });
  await client.eco.transfer(interaction.member.user.id, member.id, amount) 
  return interaction.followUp({ embeds: [new MessageEmbed().setTitle("").setDescription( `You have successfully transferred 💸**${amount}** to ** ${member.user.tag}**.` )] });
}
};
