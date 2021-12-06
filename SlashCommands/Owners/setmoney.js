const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "setmoney",
    description: "set money for a user",
        options: [
                {
                        name: "user",
                        description: "member you want to set his money",
                        type: 6,
                        required: true
                },
                {
name: "amount",
                        description: "amount to set",
                        type: 3,
                        required: true
                }
        ],
run: async (client, interaction, args) => {
const nembed = new MessageEmbed()                
          .setTitle("Set-Money")      .setColor("RANDOM")
.setDescription("❌ You dont have perms to use this command. Only Owner's can use this command")
.setThumbnail(interaction.member.user.displayAvatarURL())
                .setFooter(interaction.member.user.tag)
    if (!client.config.owner.includes(interaction.member.user.id)) return interaction.followUp({ embeds: [nembed] });

    let user = interaction.options.getMember("user");
    let amount = interaction.options.getString("amount")   

    let data = client.eco.setMoney(user.id, parseInt(amount));
        
    const embed = new MessageEmbed()
        .setTitle(`Money Updated!`)
        .setDescription(`User: <@${data.user}>\nTotal Amount: ${data.after}`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return interaction.followUp({ embeds: [embed] });
}
}
