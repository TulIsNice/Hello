const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "kill",
    category: "fun",
    description: "Kills a user!1!11!!",
    run: async (client, message, args) => {
        const user = message.mentions.users.first();
        if (!user){
            return message.reply("do that again, but this time actually mention someone to kill them!!!");
        }
        if (user == message.author){
            return message.reply("Okay you died pls tag another user that is not you.")
        }
        if (user){
            const randomnum = Math.floor(Math.random() * 10)
            if (randomnum == 0){
              return message.channel.send(`${user} has died`)
            }else if (randomnum == 1){
              return message.channel.send(`${message.author} stabbed ${user} to death`)
            }else if (randomnum == 2){
                return message.channel.send(`${user} didnt want to live so he turned on light mode`)
            }else if (randomnum == 3){
                return message.channel.send(`${message.author} drowned ${user}`)
            }else if (randomnum == 4){
                return message.channel.send(`${user} forgot to clear their history browser`)
            }else if (randomnum == 5){
                return message.channel.send(`${user} saw a cringe video and died`)
            }else if (randomnum == 6){
                return message.channel.send(`${message.author} thought people could fly. So ${message.author} threw ${user} out the window`)
            }else if (randomnum == 7){
                return message.channel.send(`${user} died from a swift kick to the brain`)
            }else if (randomnum == 8){
                return message.channel.send(`${user} forgot their duolingo spanish lesson`)
            }else if (randomnum == 9){
                return message.channel.send(`${user} dance too hard`)
            }else if (randomnum == 10){
                return message.channel.send(`${user} pressed ALT + F4`)
            }
        }
    }
}