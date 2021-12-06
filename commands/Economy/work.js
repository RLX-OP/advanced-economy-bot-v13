const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "work",
    aliases: [],
    usage: "work",
run: async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1500) + 1000;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply({ embeds: [new MessageEmbed().setTitle("").setDescription( `You are tired right now. Come back after ${work.time.minutes} minutes & ${work.time.seconds} seconds to work again.` )] });
    else return message.reply({ embeds: [new MessageEmbed().setTitle("").setDescription( `You worked as **${work.workedAs}** and earned **${work.amount}** 💸. Now you have **${work.after}**  }💸.` )] });
}
}
