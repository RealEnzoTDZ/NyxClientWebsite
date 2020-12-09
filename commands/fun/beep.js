module.exports = {
    name: 'beep',
    path: 'fun',
    permissions: [], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Boop!',
    usage: 'beep',
    exec(client, message, args) {
		message.channel.send('Boop.');
	},
};