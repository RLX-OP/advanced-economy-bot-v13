const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "daily",
    aliases: [],
    usage: "daily",
run: async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply({ embeds: [new MessageEmbed().setTitle("").setDescription( `You have already claimed your daily credit. Come back after ${addMoney.time.hours} hours, ${addMoney.time.minutes} minutes & ${addMoney.time.seconds} seconds to claim it again.` )] });
    else return message.reply({ embeds: [new MessageEmbed().setTitle("").setDescription( `You have claimed **${addMoney.amount}** 💸 as your daily credit & now you have **${addMoney.after}** 💸.` )] });
}
}

