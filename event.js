const fs = require("fs");
const path = require("path");

module.exports = {
    name: 'event',
    path: 'dev',
    permissions: [], // set command permissions
    ownerOnly: true, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Test!',
    async exec(client, message, args) {
        let Events = fs.readdirSync("./events/").filter(file => !fs.statSync(path.resolve("./events/" + file)).isDirectory()).filter(file => file.endsWith(".js"));
        for (let event of Events) {
            event = event.replace(/\.js$/i, "");
            console.info(`[EVENT LOG] Loading event: ${event}`);
            if (event === "ready") client.on(event, () => require(`../../events/${event}`)(client));
            else client.on(event, require(`../events/${event}`));
        }
        message.channel.send(`Reloaded All Events!`)
    },
};