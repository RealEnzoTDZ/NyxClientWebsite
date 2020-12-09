module.exports = {
    name: 'dice',
    path: 'fun',
    permissions: [], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Roll a dice!',
    usage: 'dice',
    exec(client, message, args) {
        message.reply(`Your Number Is ${dice()}!`)
	},
};

function dice() {
    return Math.floor(Math.random() * Math.floor(13));
}