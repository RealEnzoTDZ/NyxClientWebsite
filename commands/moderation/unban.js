module.exports = {
    name: 'unban',
    path: 'admin',
    permissions: [], // set command permissions
    adminOnly: true, // set true if command is admin only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Un-ban a user!',
    usage: 'unban <@572464507343863839>',
    async exec(client, message, args) {
        if (!args) return message.channel.send("Please define a member.");

        try {
            message.guild.members.unban(args[0]);
        } catch(e) {
            console.log(e);
            return message.channel.send(`I failed to unban the designated user!`);
        }
        return message.channel.send(`I have unbanned <@${parseInt(args[0])}>!`);
    },
};