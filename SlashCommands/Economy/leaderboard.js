const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "leaderboard",
    description: "see who is on the top ranking",
run: async (client, interaction, args) => {
   
    let leaderboard = client.eco.leaderboard({ limit: 15, raw: false });
    if (!leaderboard || leaderboard.length < 1) return message.channel.send({ content: "❌ | Empty Leaderboard!" });
    const embed = new MessageEmbed()
        .setAuthor(`Leaderboard of ${interaction.guild.name}!`, interaction.guild.iconURL)
        .setColor("RANDOM")
        .setThumbnail(client.users.cache.get(leaderboard[0].id) ? client.users.cache.get(leaderboard[0].id).displayAvatarURL : "https://cdn.discordapp.com/avatars/603948445362946084/a_f61398e073d78ae104e32b0517c891c3.gif")
        .setTimestamp();
    leaderboard.forEach(u => {
        embed.addField(`${u.position}. ${client.users.cache.get(u.id) ? client.users.cache.get(u.id).tag : "Unknown#0000"}`, `${u.money} 💸`);
    });
    return interaction.followUp({ embeds: [embed] });
}
}
