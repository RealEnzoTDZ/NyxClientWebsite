module.exports = {
    name: 'testc',
    path: 'dev',
    permissions: [], // set command permissions
    ownerOnly: true, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Test!',
    async exec(client, message, args, storedSettings) {/*
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const canvas = createCanvas(1280, 500);
        const ctx = canvas.getContext("2d");*/

        message.channel.send(`
            Test Command!
            Test 2!
        `)
    },
};