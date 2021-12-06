const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "bal",
    description: "chrck balance of others or yours",
        options: [
                {
                        name: "user",
                        description: "user to get bal",
                        type: 6,
                        required: false
                }
        ],
    run: async (client, interaction, args) => {
               let USER = interaction.options.getMember("user");
            let personalBal = client.eco.fetchMoney(interaction.member.user.id);

            if(!USER) return interaction.followUp({ embeds: [new MessageEmbed().setColor("RANDOM").setTitle(`Balance`).setDescription(`User: <@${personalBal.user}>
Balance: ${personalBal.amount} 💸
Position: ${personalBal.position}`).setThumbnail(interaction.member.user.displayAvatarURL())] })

let userBalance = client.eco.fetchMoney(USER.id);
    const embed = new MessageEmbed()
        .setTitle(`Balance`)
        .setDescription(`User: <@${userBalance.user}>
Balance: ${userBalance.amount} 💸
Position: ${userBalance.position}`)
        .setColor("RANDOM")
        .setThumbnail(USER.displayAvatarURL())
        .setTimestamp();
            interaction.followUp({ embeds: [embed] })
    }
}

