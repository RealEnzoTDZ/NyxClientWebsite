const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    path: 'util',
    description: 'Displays the bots ping!',
    permissions: [], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    usage: 'ping',
    exec(client, message, args) {
		console.log(`${client.ws.ping}ms`)

		try {
			const pingEmbed = new Discord.MessageEmbed()
				.setTitle(`Uptime: ${msToTime(client.uptime)}`)
				.setAuthor(`Ping: ${Math.round(client.ws.ping)}ms`)
				.setTimestamp()
				.setFooter(`${client.user.username} ™`);
			return message.channel.send(pingEmbed);
		} catch(e) {
			console.log(e);
		}
	},
};

function msToTime(ms){
	days = Math.floor(ms / 86400000); // 24*60*60*1000
	daysms = ms % 86400000; // 24*60*60*1000
	hours = Math.floor(daysms / 3600000); // 60*60*1000
	hoursms = ms % 3600000; // 60*60*1000
	minutes = Math.floor(hoursms / 60000); // 60*1000
	minutesms = ms % 60000; // 60*1000
	sec = Math.floor(minutesms / 1000);
  
	let str = "";
	if (days) str = str + days + "d ";
	if (hours) str = str + hours + "h ";
	if (minutes) str = str + minutes + "m ";
	if (sec) str = str + sec + "s";
  
	return str;
  }