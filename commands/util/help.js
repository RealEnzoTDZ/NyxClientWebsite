const fs = require("fs");
const path = require("path");
const modules = fs.readdirSync("./commands").filter(file => fs.statSync(path.join("./commands", file)).isDirectory());
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    path: 'util',
    description: 'Help!',
    permissions: [], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    usage: 'help',
    exec(client, message, args, storedSettings) {
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle("Help Menu")
            .setAuthor("The Chat Room")
            .setColor('#ffc400')
            .setDescription(`Commands for ${client.user.username}! Prefix is ${storedSettings.prefix}`)
            .setTimestamp()
            .setFooter(`${client.user.username} ™`);

        try {
            for (let module of modules) {
                let commandFiles = fs.readdirSync(path.resolve(`./commands/${module}`)).filter(file => !fs.statSync(path.resolve("./commands/", module, file)).isDirectory()).filter(file => file.endsWith(".js"));
                for (let file of commandFiles) {
                    file = require(`../${module}/${file}`);
                    file.module = module;
                    if (file.adminOnly) {
                        helpEmbed.addField(`${storedSettings.prefix}${file.name}`, `${file.description}\nUsage: ${storedSettings.prefix}${file.usage}\nAdmin Command`);
                    } else if (!file.ownerOnly && !file.adminOnly) {
                        helpEmbed.addField(`${storedSettings.prefix}${file.name}`, `${file.description}\nUsage: ${storedSettings.prefix}${file.usage}`);
                    }
                }
            }
        } catch (e) {
            console.log(e);
        }

        message.author.send(helpEmbed);
	},
};