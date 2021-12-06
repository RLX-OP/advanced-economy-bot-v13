const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "search",
    aliases: [],
    usage: "search",
run: async (client, message, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "RLX Database",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 200) + 50;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 300000, customName: "search" });
    if (beg.onCooldown) return message.reply({ embeds: [new MessageEmbed().setTitle("").setDescription( `Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.` )] });
    if (beg.lost) return message.channel.send({ embeds: [new MessageEmbed().setTitle("").setDescription( `**${users[Math.floor(Math.random() * users.length)]}:** You were caught! You couldn't get money kiddo.` )] });
    else return message.reply({ embeds: [new MessageEmbed().setTitle("").setDescription( `**${users[Math.floor(Math.random() * users.length)]}** was somewhat profitable, you found **${beg.amount}** 💸. Now you have **${beg.after}** 💸.` )] });
}
}
