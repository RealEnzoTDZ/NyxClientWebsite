module.exports = {
    name: 'ban',
    path: 'admin',
    permissions: [], // set command permissions
    adminOnly: true, // set true if command is admin only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Ban a user!',
    usage: 'ban <@572464507343863839> reason',
    async exec(client, message, args) {
        const member = message.mentions.members.first() || args[0];
        if (!args) return message.channel.send("Please define a member.");

        try {
            if (args[1]) member.ban(args.slice(1).join(' '));
            else member.ban();
        } catch(e) {
            console.log(e);
            return message.channel.send(`I failed to ban the designated user!`);
        }
        return message.channel.send(`I have banned <@${member.id}>!`);
    },
};