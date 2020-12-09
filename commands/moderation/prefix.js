module.exports = {
    name: 'prefix',
    path: 'dev',
    permissions: [], // set command permissions
    adminOnly: true, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Change the prefix!',
    usage: 'prefix !',
    async exec(client, message, args) {
        if (!args[0]) {
            return message.reply(`Please define a prefix!`);
        } else if (args[0]) {
            try {
                const GuildSettings = require("../../models/settings");
                var storedSettings = await GuildSettings.findOne({ gid: message.guild.id });
                storedSettings.prefix = args[0];
                await storedSettings.save().catch(() => {});
                return message.reply(`Prefix is now set to ${args[0]}`);
            } catch (e) {
                console.log(e);
            }
        }
    },
};