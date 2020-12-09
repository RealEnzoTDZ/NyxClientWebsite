module.exports = {
    name: 'test',
    path: 'dev',
    permissions: [], // set command permissions
    ownerOnly: true, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Test!',
    exec(client, message, args) {
        const Discord = require('discord.js');
        const botEmbed = new Discord.MessageEmbed()
            .setColor('#0099FF')
            .setTitle(`Testing`)
            .setAuthor(`The Legend`)
            .setDescription(`Testing All Files`)
            .setThumbnail(message.client.user.avatarURL())
            .addFields(
                { name: 'Username', value: `${message.client.user.username}`, inline: false },
                { name: 'Status', value: `Testing`, inline: false },
                { name: 'Test Still Testing', value: `..`, inline: false },
                { name: 'Ordered By', value: `<@${message.member.id}>`, inline: false },
            )
            //.setImage(message.member.user.avatarURL())
            .setTimestamp()
            .setFooter(`${client.user.username} ™`);

        const botEmbedEdited = new Discord.MessageEmbed()
            .setColor('#0099FF')
            .setTitle(`Testing`)
            .setAuthor(`The Legend`)
            .setDescription(`Testing All Files`)
            .setThumbnail(message.client.user.avatarURL())
            .addFields(
                { name: 'Username', value: `${message.client.user.username}`, inline: false },
                { name: 'Status', value: `Complete`, inline: false },
                { name: 'Test Completed', value: `All cores running, SDD (Secure Data Drive) = running, Servers = ${client.guilds.cache.size}`, inline: false },
                {
                    name: 'Ordered By', value: `<@${message.member.id}>`, inline: false },
            )
            //.setImage(message.member.user.avatarURL())
            .setTimestamp()
            .setFooter(`${client.user.username} ™`);

        const botEmbedMSG = message.channel.send(botEmbed);
        try {
            require('../../config');
            require('../../index');
            require('../../models/settings');
            require('../../config');
            botEmbedMSG.then((msg) => {
                setTimeout(function () {
                    msg.edit(botEmbedEdited);
                }, 5000)
            }); 
        } catch (e) {
            message.channel.send("An Error Occured Testing. Check Console For Details.");
            console.log(e);
        }
        

        
    },
};