const { MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
        name: "invite",
        description: "invite me in your server",
run: async (client, interaction, args) => {
        
const row = new MessageActionRow().addComponents(
      new MessageButton()        
        .setURL(`${client.config.invitelink}`)
        .setLabel("INVITE")
            .setStyle("LINK")
    )
          interaction.followUp({ content: `** **`, components: [row] })
}
}