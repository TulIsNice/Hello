const { Permissions } = require('discord.js')

module.exports = {
    name: "kick",
    category: "moderation",
    description: "kicks a mentioned user",
    usage: "[COMMAND] + [USER]",
    run: async (client, message, args) => {
        const target = message.mentions.members.first();
        const user = message.member
        const reasontxt = args[1]
        if (message.channel.type === "DM"){
            message.reply("You cannot use these in DM!")
            return;
        }
        if (!user.permissions.has(Permissions.FLAGS.KICK_MEMBERS)){
            message.reply("You dont have permissions to do that!")
            return;
        }
        if (!target.kickable){
            message.reply("You cant do that!")
            return;
        }
        if (!target){
            message.reply("Please mention a user to kick.")
            return;
        }
           target.kick({
               reason: reasontxt
           })
           message.channel.send("Successfully kicked " + `${target}. Reason : ${reasontxt}. Moderator : ${user.username}`);
           console.log("Kicked User")
    }
}
