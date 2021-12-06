const moment = require('moment');
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "uptime",
  description: "Returns the duration on how long the Bot is online",
  run: async (client, interaction, args) => {
    try {
      const rlx = moment.duration(client.uptime);
      const days = (rlx.days() == 1) ? `${rlx.days()} day` : `${rlx.days()} days`;
      const hours = (rlx.hours() == 1) ? `${rlx.hours()} hour` : `${rlx.hours()} hours`;
      const minutes = (rlx.minutes() == 1) ? `${rlx.minutes()} minute` : `${rlx.minutes()} minutes`;
      const seconds = (rlx.seconds() == 1) ? `${rlx.seconds()} second` : `${rlx.seconds()} seconds`;
      const uptime = `\`\`\`nim\nUptime  :: ${days}, ${hours}, ${minutes}, and ${seconds}\`\`\``
      interaction.followUp(uptime);
    } catch (e) {
      console.log(String(e.stack).bgRed)
			const emesdf = new MessageEmbed()
			.setColor("RED")
			.setAuthor(`An Error Occurred`)
			.setDescription(`\`\`\`${e.message}\`\`\``);
			return interaction.followUp({embeds: [emesdf]});
    }
  }
}
