const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "addmoney",
        description: "addmoney to a specific person",
        options: [
                {
                        name: "user",
                        description: "user to add money",
                        type: 6,
                        required: true
                },
                {
                       name: "amount",
                        description: "how much money to give",
                        type: "STRING",
                        required: true
                }
        ],
    run: async (client, interaction, args) => {
            const nembed = new MessageEmbed()                
          .setTitle("Add-Money")      .setColor("RANDOM")
.setDescription("❌ You dont have perms to use this command. Only Owner's can use this command")
.setThumbnail(interaction.member.user.displayAvatarURL())
                .setFooter(interaction.member.user.tag)
                if (!client.config.owner.includes(interaction.member.user.id)) return interaction.followUp({ embeds: [new MessageEmbed().setDescription("This command can be use by my owner's only.").setFooter(interaction.member.user.username)] });
            
    let USER = interaction.options.getMember("user")
            
    let AMOUNT = interaction.options.getString("amount")
            
    let data = client.eco.addMoney(USER.id, parseInt(AMOUNT));

    const embed = new MessageEmbed()
        .setTitle(`Money Added!`)
        .setDescription(`User: <@${data.user}>
Balance Given: ${data.amount} 💸
Total Amount: ${data.after} 💸`)
        .setColor("RANDOM")
        .setThumbnail(USER.displayAvatarURL)
        .setTimestamp(); 
            interaction.followUp({ embeds: [embed] });
    }
}