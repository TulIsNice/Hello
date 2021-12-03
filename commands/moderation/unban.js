const { Permissions } = require('discord.js')

module.exports = {
    name: "unban",
    category: "moderation",
    description: "bans a mentioned user",
    usage: "[COMMAND] + [USERID] + [REASON]",
    run: async (client, message, args) => {
        const target = args[0]
        const user = message.member
        const reasontxt = args[1]
        if (message.channel.type === "DM"){
            message.reply("You cannot use these in DM!")
            return;
        }
        if (!user.permissions.has(Permissions.FLAGS.UNBAN_MEMBERS)){
            message.reply("You dont have permissions to do that!")
            return;
        }
        if (!target){
            message.reply("Please include user id to unban.")
            return;
        }

        message.guild.members.unban(target, {reason: reasontxt})
         message.channel.send("Successfully unbanned")
    }
}
