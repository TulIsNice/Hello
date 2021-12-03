const Discord = require("discord.js");

module.exports = {
  name: "serverinfo",
  category: "utility",
description: "Shows info about a server",
usage: "[command]",
run: async (client, message, args) => {
//command
let owner = await message.guild.fetchOwner()
console.log(owner)
let servericon = message.guild.iconURL();
let serverembed = new Discord.MessageEmbed()
.setTitle("Server Information")
.setColor("RANDOM")
.setThumbnail(servericon)
.addField("Server Name", message.guild.name)
.addField("Owner", `${owner}`, true)
.addField("Channels", `${message.guild.channels.cache.size}`, true)
.addField("Created On", `${message.guild.createdAt}`)
.addField("You Joined", `${message.guild.joinedAt}`)
.addField("Total Members", `${message.guild.memberCount}`)
.setThumbnail(servericon)
.setTimestamp()
.setFooter(message.author.username);
message.channel.send({embeds: [serverembed]});
}
};