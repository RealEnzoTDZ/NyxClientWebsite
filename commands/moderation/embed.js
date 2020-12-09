const Discord = require("discord.js");

module.exports = {
    name: 'embed',
    path: 'moderation',
    permissions: [], // set command permissions
    adminOnly: true, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Sends embed to desired channel!',
    args: true,
    async exec(client, message, args) {
        try {
            var err = "";

            if (!args[0]) {
                err = err + " Define A Channel.";
            }
            var channel = message.guild.channels.cache.get(args[0].replace('<#', '').replace('>', ''))

            if (!args[1]) {
                err = err + " Define A title.";
            }
            var title = args[1].replace('-', ' ');

            if (!args[2]) {
                err = err + " Definde A Desc."
            }
            var desc = args[2].replace('-', ' ');
            if (err != "") {
                message.reply(err);
            }

            const embed = new Discord.MessageEmbed()
                .setTitle(title)
                .setDescription(desc)
                .setFooter(`${client.user.username} ™`)
                .setTimestamp();

            message.guild.channels.cache.get(channel.id).send(embed);
        } catch (e) {
            console.log(e);
        }
    },
};