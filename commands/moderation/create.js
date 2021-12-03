const { Permissions } = require('discord.js')

module.exports = {
    name: "create",
    category: "moderation",
    description: "Creates a channel",
    usage: "[COMMAND] + [NAME]",
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
            message.reply("Please include channel name.")
            return;
        }
        message.guild.channels.create(query).then((ch) => {
            message.channel.send(`Click ${ch} to access to the channel!`)
        });
        
    }
}
