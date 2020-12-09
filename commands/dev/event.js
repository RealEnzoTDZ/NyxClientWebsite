module.exports = {
    name: 'event',
    path: 'dev',
    permissions: [], // set command permissions
    ownerOnly: true, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
	description: 'Start event!',
    args: true,
    exec(client, message, args) {
        if (!args) {
            message.reply("Define an event!");
        }

        client.emit(args[0], message.member);
	},
};