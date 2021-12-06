const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "search",
        description: "search things to earn more",
run: async (client, interaction, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "RLX Database",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 200) + 50;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 300000, customName: "search" });
    if (beg.onCooldown) return interaction.followUp({ embeds: [new MessageEmbed().setColor().setDescription(`Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`)] });
    if (beg.lost) return interaction.followUp({ embeds: [new MessageEmbed().setColor().setDescription(`**${users[Math.floor(Math.random() * users.length)]}:** You were caught! You couldn't get money kiddo.`)] });
            
    else return interaction.followUp({ embeds: [new MessageEmbed().setColor().setDescription(`**${users[Math.floor(Math.random() * users.length)]}** was somewhat profitable, you found **${beg.amount}** 💸. Now you have **${beg.after}** 💸.`)] });
}
}
