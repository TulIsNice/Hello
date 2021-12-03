//Modules
const { Client, Collection, Intents } = require("discord.js");
const config = require("./config.json");
const fs = require("fs");

const client = new Client({
    intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ],
});

//Command Handler
client.commands = new Collection();
client.aliases = new Collection();

//Command Folder location
client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

//Bot Status
client.on("ready", () => {
console.log(`Bot User ${client.user.username} has been logged in and is ready to use!`);
client.user.setActivity('t!help', { type: 'LISTENING' });
});

client.on("guildMemberAdd", member => {
    const channel = member.guild.channels.cache.find(channel => channelname === "welcome")
})

client.on("message", async message => {
    //Loads prefix from config.json
    const prefix = (config.prefix);
    //Makes sure bot wont respond to other bots including itself
    if (message.author.bot) return;
    //Checks if the command is from a server and not a dm
    if (!message.guild) return;
    //Checks if the command starts with a prefix
    if (!message.content.startsWith(prefix)) return;
    //Makes sure bot wont respond to other bots including itself
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command){
        message.reply("Please enter valid command!")
    }

    if (command) 
        command.run(client, message, args);
});

//Log into discord using the token in config.json
client.login(config.token);