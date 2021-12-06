const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ["latency"],
  description: "Gives you information on how fast the Bot can respond to you",
  run: async (client, message, args) => {
    try {
        
      const embed = new MessageEmbed()
      .setDescription('`Pinging...`')
      .setColor("RED");    
      const msg = await message.channel.send({embeds: [embed]});
      const timestamp = (message.editedTimestamp) ? message.editedTimestamp : message.createdTimestamp;
      const latency = `  ${Math.floor(msg.createdTimestamp - timestamp)} ms`;
      const apiLatency = `  ${message.client.ws.ping - 19} ms`;
      embed.setDescription(`\`\`\`nim\nWebsocket Latency :: ${latency}\nAPI Latency       :: ${apiLatency}\`\`\``)
      .setAuthor(client.user.username, client.user.displayAvatarURL(), client.config.invitebot)
      msg.edit({embeds: [embed]});
    } catch (e) {
      console.log(String(e.stack).bgRed)
			const emesdf = new MessageEmbed()
			.setColor("RED")
			.setAuthor(`An Error Occurred`)
			.setDescription(`\`\`\`${e.message}\`\`\``);
			return message.channel.send({ embeds: [emesdf] });
    }
  }
}