module.exports = {
    name: 'leave',
    path: 'dev',
    permissions: [], // set command permissions
    ownerOnly: true, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Test!',
    async exec(client, message, args) {
        if (!args) return message.channel.send("Please define a server.");

        try {
            client.guilds.cache.get(args[0]).leave();
        } catch(e) {
            console.log(e);
            return message.channel.send(`I failed to leave the designated server check log!`);
        }
        return message.channel.send(`I have left ${client.guilds.cache.get(args[0]).name}!`);
    },
};