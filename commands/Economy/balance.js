const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "balance",
    aliases: ["money", "credits", "bal"],
    usage: `balance <@user>`,
    run: async (client, message, args) => {
               let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(user.id);
    const embed = new MessageEmbed()
        .setTitle(`Balance`)
        .setDescription(`User: <@${userBalance.user}>
Balance: ${userBalance.amount} 💸
Position: ${userBalance.position}`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL())
        .setTimestamp();
            message.channel.send({ embeds: [embed] })
    }
}

