module.exports = {
    name: 'purge',
    path: 'dev',
    permissions: [], // set command permissions
    ownerOnly: true, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Purge an amount of messages!',
    usage: 'purge AMOUNT',
    async exec(client, message, args) {
        if (!args) return message.channel.send("Please define an amount of messages");
        var amount1 = parseInt(args[0]);
        var amount2 = amount1 + 1;
        var amount = toString(amount2);
        message.channel.bulkDelete(amount2);
        message.channel.send(`Deleted ${args[0]} messages.`).then(msg => setTimeout(function () {msg.delete()}, 3000));
    },
};