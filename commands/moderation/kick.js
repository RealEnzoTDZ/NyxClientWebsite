module.exports = {
    name: 'kick',
    path: 'admin',
    permissions: [], // set command permissions
    adminOnly: true, // set true if command is admin only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Kick a user!',
    usage: 'kick <@572464507343863839> reason',
    async exec(client, message, args) {
        const member = message.mentions.members.first();
        if (!args) return message.channel.send("Please define a member.");

        try {
            if (args[1]) member.kick(args.slice(1).join(' '));
            else member.kick();
        } catch(e) {
            console.log(e);
            return message.channel.send(`I failed to kick the designated user!`);
        }
        return message.channel.send(`I have kicked <@${member.id}>!`);
    },
};