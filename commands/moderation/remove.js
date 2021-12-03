const { Permissions } = require('discord.js')

module.exports = {
    name: "delete",
    category: "moderation",
    description: "Deletes the channel",
    usage: "[COMMAND] + [Mention Channel]",
    run: async (client, message, args) => {
        const user = message.member
        const query = args[0];
        const role = message.guild.roles.everyone
        if (message.channel.type === "DM"){
            message.reply("You cannot use these in DM!")
            return;
        }
        if (!user.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)){
            message.reply("You dont have permissions to do that!")
            return;
        }
        if (!query){
            message.reply("Please mention a channel.")
            return;
        }
        const channeltarget = message.mentions.channels.first() || message.channel;
        message.channel.send(`Successfully removed ${channeltarget.name}!`)
        message.author.send("Successfully removed the channel.")
        channeltarget.delete();
        
    }
}
