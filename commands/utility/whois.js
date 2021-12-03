    const Discord = require("discord.js")

    module.exports = {
    name: "whois",
	aliases: ["info"],
    category: "utility",
    description: "Get information about a user",
    usage: "[command | user] or [command]",
    run: async (client, message, args) => {
    //command
    
{
    const user = message.mentions.users.first();
    if(!user)
        return message.reply('Please mention the user who you want info about.');
    
    var playing = ("[ " + user.activities + " ]")
    var status = user.status
    
    const whothefuq = new Discord.MessageEmbed()
          .setTitle("User Info:")
          .addField("Full Username", `${user.tag}`)
          .addField("ID", user.id)
          .addField("Joined Discord At",`${user.createdAt}`,true)
          .setColor("RANDOM")
          .setTimestamp()
          .setThumbnail(user.avatarURL())  
      message.channel.send({ embeds: [whothefuq] })
      console.log(user.createdAt)
    };
    }
       
  
    
    };