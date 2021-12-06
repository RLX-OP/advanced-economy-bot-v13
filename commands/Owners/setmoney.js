const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "setmoney",
    aliases: ["setbal"],
    usage: `setmoney @user <amount>`,
run: async (client, message, args) => {
    if (!client.config.owner.includes(message.author.id)) return message.channel.send({ embeds: [new MessageEmbed().setTitle("").setDescription('Only the owners can use this command!')] });
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Please specify a user!");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Please specify a valid amount.");
    let data = client.eco.setMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`Money Updated!`)
        .setDescription(`User: <@${data.user}>\nTotal Amount: ${data.after}`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send({ embeds: [embed] });
}
}
