const {
  MessageEmbed
} = require(`discord.js`);

module.exports = {
  name: `reboot`,
  run: async (client, message, args) => {
    if (!client.config.owner.includes(message.author.id)) {
      const nop = new MessageEmbed()
      .setColor(ee.wrongcolor)
      .setDescription(`${emoji.msg.ERROR} You are not allowed to run this command! Only the Owners are allowed to run this command!`)
      return message.channel.send({embeds: [nop]})
    }
    try {
      message.channel.send({ embeds: [new MessageEmbed().setTitle("").setDescription("Restarting Bot!")] });
        setTimeout(() => {
          process.exit();
        }, 2000);
    } catch (e) {
      console.log(String(e.stack).bgRed)
      const emesdf = new MessageEmbed()
      .setColor("RED")
      .setAuthor(`An Error Occurred`)
      .setDescription(`\`\`\`${e.message}\`\`\``);
      return message.channel.send({embeds: [emesdf]});
    }
  },
};