const { Permissions } = require('discord.js')

module.exports = {
    name: "clear",
    category: "moderation",
    description: "Deletes messages in a text channel or specified number of messages in a text channel.",
    usage: "[COMMAND] OR [COMMAND] + [number of messages]",
    run: async (client, message, args) => {
      
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)){
            message.reply("You dont have permissions to do that!")
            return;
        }

        message.channel.messages.fetch()
        .then(function(list){
             message.channel.bulkDelete(list);
         }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})   

    }
}