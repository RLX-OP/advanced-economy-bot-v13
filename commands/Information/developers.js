const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "developers",
    aliases: ["dev", "creator"],
    description: "Shows The Developers Of Economy Bot",
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
        .setAuthor(`Economy Bot Developers`)
        .setDescription(
`
\u200b
<a:developer_badge:879386609143914546>  [\`RLX\`](https://discord.com/users/753168925167976479) - [\`Server\`](https://discord.gg/S8fC3MFMy3)
\u200b
<a:developer_badge:879386609143914546> [\`MathisCool\`](https://discord.com/users/820142398935793685) - [\`Server\`](https://discord.gg/eTD6B2Mxsf)
\u200b
`
)
.setFooter(`Thanks For Using ${client.user.username}.`, client.user.displayAvatarURL())
.setColor(`#303037`)
message.channel.send({ embeds: [embed] })

    }
}