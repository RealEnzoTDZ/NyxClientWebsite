const activeUsers = {};
const Discord = require('discord.js');
const mongoose = require("mongoose");
const config = require("../config");
const GuildSettings = require("../models/settings");
const Dashboard = require("../dashboard/dashboard");

module.exports = async message => {
    // Declaring a reply function for easier replies - we grab all arguments provided into the function and we pass them to message.channel.send function.
    //const reply = (...arguments) => message.channel.send(...arguments);

    // Doing some basic command logic.
    if (message.author.bot) return;
    //if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;

    if (message.guild === null) {
      console.log(`DM Received From: ${message.author.tag} (${message.author.id}): "${message.content}"`)
      return;
    }
  
    // Retriving the guild settings from database.
    var storedSettings = await GuildSettings.findOne({ gid: message.guild.id });
    if (!storedSettings) {
        // If there are no settings stored for this guild, we create them and try to retrive them again.
        const newSettings = new GuildSettings({
            gid: message.guild.id
        });
        await newSettings.save().catch(() => { });
        storedSettings = await GuildSettings.findOne({ gid: message.guild.id });
    }

    // If the message does not start with the prefix stored in database, we ignore the message.
    if (message.content.indexOf(storedSettings.prefix) !== 0) return;

    // We remove the prefix from the message and process the arguments.
    const args = message.content.slice(storedSettings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        /*if (await storedSettings.findOne({  })) {
            // Send command disabled

            const isDisabledCommandEmbed = new Discord.MessageEmbed()
                .setAuthor("The Chat Room")
                .setColor('#ffc400')
                .setThumbnail('https://101clipart.com/wp-content/uploads/02/Clipart%20Construction%20Tools%2017.png')
                .setDescription(`Command Disabled`)
                .addFields([
                    {
                        name: `Disabled Command`,
                        value: "This command is disabled the command be in maintenance!"
                    },
                ])
                .setTimestamp()
            .setFooter(`${client.user.username} �`);

        return message.channel.send(isDisabledCommandEmbed);
        //}*/
        if (storedSettings.maintenance == true) {//("true".indexOf(storedSettings.maintenance == 0) && !message.author.id == "725070512060891197") {
            const isMaintenanceEmbed = new Discord.MessageEmbed()
                .setAuthor("The Chat Room")
                .setColor('#ffc400')
                .setThumbnail('https://101clipart.com/wp-content/uploads/02/Clipart%20Construction%20Tools%2017.png')
                .setDescription(`Maintenance Mode Active`)
                .addFields([
                    {
                        name: `Maintenance Mode`,
                        value: "You are unable to use commands while Maintenance Mode is active!"
                    },
                ])
                .setTimestamp()
                .setFooter(`${client.user.username} �`);

            return message.channel.send(isMaintenanceEmbed);
        }
    } catch (e) {
        console.log(e);
    }

    try {
        cmdFile = message.client.commands.get(command);

        if (message.member.id == "725070512060891197" || message.member.id == "716485063524745306" /*|| message.member.id == "572464507343863839"*/) {
            return cmdFile.exec(message.client, message, args, storedSettings);
        }

        if (cmdFile.adminOnly == true && message.member.hasPermission('ADMINISTRATOR')) {
            return cmdFile.exec(message.client, message, args, storedSettings);
        }

        if (!cmdFile.ownerOnly && !cmdFile.adminOnly) {
            return cmdFile.exec(message.client, message, args, storedSettings);
        }
    } catch (e) {
        return message.channel.send(`The command ${command} doesn't exist`);;
    }

    if (activeUsers.hasOwnProperty(cmdFile.name)) {
        activeUsers[cmdFile.name].push(message.author.id);
        message.client.setTimeout(() => {
            activeUsers[cmdFile.name].splice(activeUsers[cmdFile.name].indexOf(message.author.id), 1);
        }, cmdFile.cooldown * 1000);
    }
}
