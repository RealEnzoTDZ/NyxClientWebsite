const Discord = require("discord.js");

module.exports = {
    name: 'user',
    path: 'util',
    permissions: [], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Display info about yourself or another member.',
    usage: 'user OPTIONAL_MENTION',
    exec(client, message, args) {
        const member = message.mentions.members.first() || message.member;
        const status = member.user.presence || "Relaxing";
        function isBot() {
            if (member.user.bot) {
                return true;
            } else {
                return false;
            }
        }

        function isPremium() {
            if (member.user.premium) {
                return true;
            } else {
                return false;
            }
        }

        function isVerified() {
            if (member.user.verified) {
                return true;
            } else {
                return false;
            }
        }

        try {
			const userEmbed = new Discord.MessageEmbed()
				.setColor('#0099FF')
                .setTitle(`${member.user.username}`)
                .setAuthor(`${member.user.username}`)
                .setDescription(`Info about ${member.user.username}!`)
                .setThumbnail(member.user.avatarURL())
				.addFields(
                    { name: 'Username', value: `${member.user.username}`, inline: true },
                    { name: 'Id', value: `${member.id}`, inline: true },
					{ name: 'Is A Bot', value: `${isBot()}`, inline: true },
                    { name: 'Created At', value: `${member.user.createdAt}`, inline: true },
                    { name: 'Discrim', value: `#${member.user.discriminator}`, inline: true },
                    { name: 'Premium', value: `${isPremium()}`, inline: true },
                    { name: 'Tag', value: `${member.user.tag}`, inline: true },
                    { name: '2FA/MFA Enabled', value: `${member.user.mfa}`, inline: true },
                    { name: 'Verified', value: `${isVerified()}`, inline: true },
				)
				//.setImage(message.member.user.avatarURL())
                .setTimestamp()
                .setFooter(`${client.user.username} ™`);
            console.log(member);
            console.log(member.mfaLevel);
			message.channel.send(userEmbed);
		} catch(e) {
			message.channel.send("Error")
			console.log(e);
		}
	},
};