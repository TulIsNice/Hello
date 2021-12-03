const { Permissions } = require('discord.js')

module.exports = {
    name: "ban",
    category: "moderation",
    description: "bans a mentioned user",
    usage: "[COMMAND] + [USER]",
    run: async (client, message, args) => {
        const target = message.mentions.members.first();
        const user = message.member
        const reasontxt = args[1]
        if (message.channel.type === "DM"){
            message.reply("You cannot use these in DM!")
            return;
        }
        if (!user.permissions.has(Permissions.FLAGS.BAN_MEMBERS)){
            message.reply("You dont have permissions to do that!")
            return;
        }
        if (target === `<@913270673512742953>`){
            message.reply("Why? 😢")
            return;
        }
        if (!target.bannable){
            message.reply("I cant ban that user.")
            return;
        }
        if (!target){
            message.reply("Please mention a user to ban.")
            return;
        }
           target.ban({
               reason: reasontxt
           })
           message.channel.send("Successfully banned");
           console.log("Banned User")
    }
}
