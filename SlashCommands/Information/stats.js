const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "stats",
    description: "Shows Bot Stats, like amount of Commands, Developer's and etc.",
    run: async (client, interaction, args) => {
        try {
            let totalSeconds = interaction.client.uptime / 1000;
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            
            let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  

            const statsEmbed = new Discord.MessageEmbed()
            .setColor("#303037")
            .setAuthor(client.user.tag, client.user.displayAvatarURL())
            .setDescription(`[Invite](${client.config.invitelink}) ● [Support Server](${client.config.server})`)
            .setFooter(`Thanks For Using ${client.user.username}`, client.user.displayAvatarURL())
            .addFields (
                { name: `🏣 • **Servers**`, value: `\`\`\`Total: ${client.guilds.cache.size} servers\`\`\``, inline: true },
                { name: `👨 • **Users**`, value: `\`\`\`Total: ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} users\`\`\``, inline: true },
                { name: `🚓 • **Node Version**`, value: `\`\`\`v${process.versions.node}\`\`\``, inline: true },
                { name: `📒 • **Discord.js**`, value: `\`\`\`${Discord.version}\`\`\``, inline: true },
                { name: `💹 • **Uptime**`, value: `\`\`\`${uptime}\`\`\``, inline: true },
                { name: `📌 • **Ping**`, value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true },
                { name: `❤️ • **Developers**`, value: `\`\`\`\nRLX, MathIsCool\n\`\`\``, inline: true }
            )
            interaction.followUp({ embeds: [statsEmbed] });
        } catch (e) {
            console.log(String(e.stack).bgRed)
			const emesdf = new MessageEmbed()
			.setColor("RED")
			.setAuthor(`An Error Occurred`)
			.setDescription(`\`\`\`${e.message}\`\`\``);
			return interaction.followUp({ embeds: [emesdf ]});
        }
    }
}