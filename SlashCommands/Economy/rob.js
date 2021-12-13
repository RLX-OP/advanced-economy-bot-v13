const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "rob",
  description: "rob people to get money",
options: [
        {
                name: "user",
                description: "choose a member whome you want to rob",
                type: 6,
                required: true
        }
],
run: async (client, interaction, args) => {
  let target = interaction.options.getMember("user");
  if(!target) return interaction.followUp("Who are you trying to rob?")
  let messages = [
    `You tripped while trying to rob ${target} and got caught!`,
    `Getting sneaky eh? ${target} called the cops on you!`,
    `You failed robbing ${target} becase you didn't subscribe to \`Code With Frazix\`.`
  ]
   let amount = Math.floor(Math.random() * 50) + 10;
    let rob = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (rob.onCooldown) return interaction.followUp(`You have recently attempted to rob someone try again after ${rob.time.seconds} seconds.`);
    if (rob.lost) return interaction.followUp(messages[Math.floor(Math.random() * messages.length)]);
    else { 
      let x = client.eco.fetchMoney(target.id).amount - amount 
      
      client.eco.setMoney(target.id,parseInt(x))
      interaction.followUp(`You robbed ${target} for **${rob.amount}** 💸. Now you have **${rob.after}** 💸.`);
    }
}
};
