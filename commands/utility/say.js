module.exports = {
    name: "say",
	aliases: ["utility"],
    category: "utility",
    description: "Says what you say!",
    run: async (client, message, args) => {
        if(args == ""){
            return message.reply("Please type what you want me to say! t!say (Your message)")
        }
        var text = message.content.split(' ').slice(1).join(' ');
        message.channel.send(`${text}`)
        console.log(`${text}`)
    }
}
