const { MessageEmbed } = require("discord.js");
const { inspect } = require("util");

module.exports = {    
        name: "eval",
            description: "owner's only",            
    run: async (client, message, args) => {
            const nembed = new MessageEmbed()                
          .setTitle("EVAL")      .setColor("RANDOM")
.setDescription("❌ You dont have perms to use this command. Only Owner's can use this command")
.setThumbnail(message.member.user.displayAvatarURL())
                .setFooter(message.member.user.tag)

            if (!client.config.owner.includes(message.member.user.id)) return message.channel.send({ embeds: [nembed] });            
        
            let toEval = args.join(" ")

        
        try {
                const embed = new MessageEmbed()                
          .setTitle("EVAL")      .setColor("RANDOM")
.setDescription("❌ Error: `Cannot evaluate nothing`")
.setThumbnail(message.member.user.displayAvatarURL())
                .setFooter(message.member.user.tag)
            let evaluated = inspect(eval(toEval, { depth: 0 } ))                
        if (!toEval) return message.channel.send({ embeds: [embed] });
                const embed1 = new MessageEmbed()                
          .setTitle("EVAL")      .setColor("RANDOM")
.setDescription("❌ Error: `Request is too long.`")
.setThumbnail(message.member.user.displayAvatarURL())
                .setFooter(message.member.user.tag)

            if (evaluated.length > 1950) return message.channel.send({ embeds: [embed1] });
                let hrDiff = process.hrtime(process.hrtime());
                const embed2 = new MessageEmbed()                
          .setTitle("EVAL")      .setColor("RANDOM")
.setDescription(`Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms.*\`\`\`javascript\n${evaluated}\n\`\`\``)
.setThumbnail(message.member.user.displayAvatarURL())
                .setFooter(message.member.user.tag)                       
            message.channel.send({ embeds: [embed2] })
        } catch(e) {
            message.channel.send({ content: `An error occurred : \`${e.message}\`` });
        }
            
    } 
}