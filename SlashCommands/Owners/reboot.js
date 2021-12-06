const {
  MessageEmbed
} = require(`discord.js`);

module.exports = {
  name: `reboot`,
        description: "reboot the bot",
  run: async (client, interaction, args) => {
    if (!client.config.owner.includes(interaction.member.user.id)) {
      const nop = new MessageEmbed()
      .setColor("RED")
      .setDescription(`❌ You are not allowed to run this command! Only the Owners are allowed to run this command!`)
      return interaction.followUp({embeds: [nop]})
    }
    try {
      interaction.followUp({ embeds: [new MessageEmbed().setTitle("").setDescription("<a:loading:879577672303378442> Restarting Bot!")] }).then(msg => client.destroy())
        .then(() => client.login(process.env.TOKEN));
            console.log("Restarted :)")
    } catch (e) {
      console.log(String(e.stack).bgRed)
      const emesdf = new MessageEmbed()
      .setColor("RED")
      .setAuthor(`An Error Occurred`)
      .setDescription(`\`\`\`${e.message}\`\`\``);
      return interaction.followUp({embeds: [emesdf]});
    }
  },
};