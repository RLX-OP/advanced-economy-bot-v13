const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "beg",
    aliases: [],
    usage: "beg",
        run: async (client, message, args) => {
    let users = [
        "PewDiePie",
        "T-Series",
        "Sans",
        "RLX",
        "CarryMinati",
        "MathisCool"
    ];
    let amount = Math.floor(Math.random() * 50) + 10;
    let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (beg.onCooldown) return message.reply({ embeds: [new MessageEmbed().setTitle("").setDescription(`Begon Thot! Come back after ${beg.time.seconds} seconds.` )] });
    if (beg.lost) return message.channel.send({ embeds: [new MessageEmbed().setTitle("").setDescription( `**${users[Math.floor(Math.random() * users.length)]}:** Begon Thot! Try again later.`)] });
    else return message.reply({ embeds: [new MessageEmbed().setTitle("").setDescription(`**${users[Math.floor(Math.random() * users.length)]}** donated you **${beg.amount}** 💸. Now you have **${beg.after}** 💸.` )] });
}
}

