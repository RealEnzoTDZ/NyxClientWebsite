const Discord = require('discord.js');
const settings = require('../../models/settings');
const { cache } = require('ejs');

module.exports = {
    name: 'maintenance',
    path: 'dev',
    permissions: [], // set command permissions
    ownerOnly: true, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Maintenance!',
    async exec(client, message, args, storedSettings) {

        const isMaintenanceEmbedTrue = new Discord.MessageEmbed()
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
            .setFooter(`${client.user.username} ™`);

            // I think all of them but 2 have embeds :/ \\
      
        const isMaintenanceEmbedFalse = new Discord.MessageEmbed()
            .setAuthor("The Chat Room")
            .setColor('#ffc400')
            .setThumbnail('https://101clipart.com/wp-content/uploads/02/Clipart%20Construction%20Tools%2017.png')
            .setDescription(`Maintenance Mode ${storedSettings.maintenance}`)
            .addFields([
                {
                    name: `Maintenance Mode`,
                    value: "You are now able to use commands while Maintenance Mode is not active! Use '" + storedSettings.prefix + "' While maintenance mode is not active!"
                },
            ])
            .setTimestamp()
            .setFooter(`${client.user.username} ™`);


        if (message.author.id == "725070512060891197") {
            if (storedSettings.maintenance == false) {//if ("false".indexOf(storedSettings.maintenance == 0)) {
                try {
                    client.maintenance = true;
                    //storedSettings.maintenance = "true";
                    //await storedSettings.save();
                    return message.channel.send(isMaintenanceEmbedTrue);
                    //message.channel.send(storedSettings.maintenance);
                } catch (e) {
                    console.log(e);
                    //message.channel.send(storedSettings.maintenance);
                }
            } else if (storedSettings.maintenance == true) {//if ("true".indexOf(storedSettings.maintenance == 0)) {
                try {
                    client.maintenance = false;
                    //storedSettings.maintenance = "false";
                    //await storedSettings.save();
                    return message.channel.send(isMaintenanceEmbedFalse);
                    //message.channel.send(storedSettings.maintenance);
                } catch (e) {
                    console.log(e);
                    //message.channel.send(storedSettings.maintenance);
                }
            }
        } else {
            message.reply('there was an error trying to execute that command!');
        }
    }
};