module.exports = {
    name: 'start',
    path: 'dev',
    permissions: [], // set command permissions
    ownerOnly: true, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
	description: 'Start!',
    args: true,
    exec(client, message, args) {
                if(!message.author.id == "725070512060891197") {return message.reply('there was an error trying to execute that command!');}

                if(!args || args.length < 1) return message.reply("Must provide a command name to reload.");
        
                
                const commandDir = args[0];
                const commandName = args[1];
                
                try {
                    const commandTemp = require(`../${commandDir}/${commandName}.js`);
                } catch(e) {
                        return message.reply("That command does not exist");
                }

                const props = require(`../${commandDir}/${commandName}.js`);
                client.commands.set(commandName, props);
                message.reply(`The command ${commandName} has been started!`);
	},
};

const Discord = require('discord.js');
const startEmbed = new Discord.MessageEmbed()
    .set