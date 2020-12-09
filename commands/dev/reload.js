module.exports = {
    name: 'reload',
    path: 'dev',
    permissions: [], // set command permissions
    ownerOnly: true, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
	description: 'Reload!',
    args: true,
    exec(client, message, args) {
        if(!message.author.id == "725070512060891197") {return message.reply('there was an error trying to execute that command!');}

        if(!args || args.length < 1) return message.reply("Must provide a command name to reload.");
        
        const commandName = args[0];
        const cmd = client.commands.get(commandName);
        
        if(!client.commands.has(commandName)) {
            return message.reply("That command does not exist");
        }
        
        delete require.cache[require.resolve(`../${cmd.path}/${commandName}.js`)];
        
        client.commands.delete(commandName);
        const props = require(`../${cmd.path}/${commandName}.js`);
        client.commands.set(commandName, props);
        message.reply(`The command ${commandName} has been reloaded`);
	},
};