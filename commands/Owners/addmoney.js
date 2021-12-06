const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "addmoney",
    aliases: ["addbal"],
    usage: `addmoney @user <amount>`,
    run: async (client, message, args) => {
    if (!client.config.owner.includes(message.author.id)) return message.channel.send({ embeds: [new MessageEmbed().setColor("RED").setDescription("This command can be only used by my owners.").setFooter(message.member.user.displayAvatarURL(), message.member.user.username)]})
    let user = message.mentions.users.first();
    if (!user) return message.reply({ embeds: [new MessageEmbed().setTitle("").setDescription( "Please specify a user!" )] });
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply({ embeds: [new MessageEmbed().setTitle("").setDescription("Please specify a valid amount." )] });
    let data = client.eco.addMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`Money Added!`)
        .setDescription(`User: <@${data.user}>
Balance Given: ${data.amount} 💸
Total Amount: ${data.after} 💸`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send({ embeds: [embed] });
}

}