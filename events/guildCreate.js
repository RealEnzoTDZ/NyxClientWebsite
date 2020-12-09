const GuildSettings = require("../models/settings");

module.exports = async guild => {
    var storedSettings = await GuildSettings.findOne({ gid: guild.id });
    setTimeout(1000)
    if (!storedSettings) {
        // If there are no settings stored for this guild, we create them and try to retrive them again.
        const newSettings = new GuildSettings({
            gid: guild.id
        });
        await newSettings.save().catch(() => { });
        storedSettings = await GuildSettings.findOne({ gid: guild.id });
    }
    guild.language = "en";
    guild.systemChannel.send(`We need to be setup! We will add more to this soon! My starter prefix is '${storedSettings.prefix}' you can change this with ${storedSettings.prefix}prefix PREFIX but for now lets get started`);
    guild.client.on('message', async msg => {
        if (msg.channel.id == guild.systemChannel.id) {
            checkChannel = message.content.replace(/\D/g, '');
            try {
                guild.channels.cache.get(checkChannel).send("This is now the welcome channel.");
                const GuildSettings = require("./models/settings");
                var storedSettings = await GuildSettings.findOne({ gid: message.guild.id });
                storedSettings.welcomeChannelId = checkChannel;
                await storedSettings.save().catch(() => { });
            } catch (e) {

            }
        }
    })
    console.log(`[JOINED GUILD]: ${guild.name} | ${guild.id}`);
}
