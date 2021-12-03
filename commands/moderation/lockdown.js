const { Permissions } = require('discord.js')

module.exports = {
    name: "lockdown",
    category: "moderation",
    description: "Locksdown the server",
    usage: "[COMMAND] + [true/false]",
    run: async (client, message, args) => {
        const user = message.member
        const query = args[0];
        const role = message.guild.roles.everyone
        if (message.channel.type === "DM"){
            message.reply("You cannot use these in DM!")
            return;
        }
        if (!user.permissions.has(Permissions.FLAGS.ADMINISTRATOR)){
            message.reply("You dont have permissions to do that!")
            return;
        }

        if (!query){
            message.reply("Please include true/false")
            return;
        }
        const perms = role.permissions.toArray();

        if (query === "true"){
           const newPerms = perms.filter((perm) => perm != "SEND_MESSAGES");
           console.log(newPerms)

           await role.edit({ permissions: newPerms })
           message.channel.send("@everyone Server Is Now Lockdowned")
        } else if (query === "false"){
            perms.push("SEND_MESSAGES");
            console.log(perms)
            await role.edit({ permissions: perms })
            message.channel.send("@everyone Server Is Now Unlocked")
        } else {
            message.reply("Query not valid!!!!!")
        }
        
    }
}
