const Discord = require('discord.js');

module.exports = {
    name: 'server',
    path: 'util',
    permissions: [], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Display info about this server.',
    usage: 'server',
    exec(client, message, args) {
        try {
            const serverEmbed = new Discord.MessageEmbed()
                .setTitle(`Total Members ${message.guild.memberCount}`)
                .setAuthor(`${message.guild.name}`)
                .addFields([
                    {
                        name: `Owner`,
                        value: `<@${message.guild.ownerID}>`
                    },
                    {
                        name: `Total Members`,
                        value: message.guild.memberCount
                    }
                ])
                .setThumbnail(message.guild.iconURL())
                .setTimestamp()
                .setFooter(`${client.user.username} ™`);

            message.channel.send(serverEmbed);
        }
        catch (e) {
            message.channel.send("Error")
            console.log(e);
        }
    },
};