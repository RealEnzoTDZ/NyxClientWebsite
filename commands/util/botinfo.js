const Discord = require("discord.js");

module.exports = {
    name: 'botinfo',
    path: 'util',
    permissions: [], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Display info about the bot.',
    usage: 'botinfo',
    exec(client, message, args) {
		try {
			const botEmbed = new Discord.MessageEmbed()
				.setColor('#0099FF')
				.setTitle(`${message.client.user.username}`)
                .setAuthor(`${message.client.user.username}`)
                .setDescription(`Info about ${message.client.user.username}!`)
                .setThumbnail(message.client.user.avatarURL())
				.addFields(
                    { name: 'Username', value: `${message.client.user.username}`, inline: true },
                    { name: 'Id', value: `${message.client.user.id}`, inline: true },
					{ name: 'console.log(isALegend)', value: `true`, inline: false },
                    { name: 'Coders', value: `<@725070512060891197>, <@716485063524745306>, <@>697668300603392010`, inline: false },
					{ name: 'Coded In', value: `JS`, inline: false },
					{ name: 'Hosted At', value: `Home`, inline: false },
				)
				//.setImage(message.member.user.avatarURL())
                .setTimestamp()
                .setFooter(`${client.user.username} ™`);

            message.channel.send(botEmbed);
		} catch(e) {
			message.channel.send("Error")
			console.log(e);
		}
	},
};