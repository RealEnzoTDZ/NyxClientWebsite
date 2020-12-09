/*
  > Index.Js is the entry point of our application.
*/
// We import the modules.
const Discord = require("discord.js");
const mongoose = require("mongoose");
const config = require("./config");
const GuildSettings = require("./models/settings");
const Dashboard = require("./dashboard/dashboard");
const Bot = new Discord.Client();
const Token = process.env.SUPPORT_TOKEN;

// We instiate the client and connect to database.
const client = new Discord.Client();
mongoose.connect(config.mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.config = config;

client.maintenance = false;

// We listen for client's ready event.
client.on("ready", () => {
    process.stdout.write("\n");
    console.log(`Bot is ready. (${client.guilds.cache.size} Guilds - ${client.channels.cache.size} Channels - ${client.users.cache.size} Users)`);
    Dashboard(client);
});

require("./handlers/eventHandler")(client);
require("./handlers/moduleHandler")(client);


// Listening for error & warn events.
client.on("error", console.error);
client.on("warn", console.warn);

// We login into the bot.
client.login(config.token);

  
  Bot.on("message", message => {
    // Message Received
    if (message.guild !== null) {
      if (message.guild.id === '779768427749310485') {
      let prefix = '*reply';
        if (!message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        let mention = message.mentions.users.first();
        if (!mention) {
          return message.reply('Specify A User.');
        }
        
        if (!args[1]) {
          return message.reply('Specify A Message.');
        }
        
        if (message.content === "") return message.reply('Specify A Message.');
        
        const newMessage = args.slice(1).join(' ');
        mention.send(newMessage);
      }
      return;
    }
    // Message Is A DM
    if (message.author.bot) return;
    // Message Is NOT From Bot
    if (message.content.length >= 1000) return message.reply('Please shorten your message.');
    // Message Is Not Over 1000 Characters
      console.log(message.author.username);
      console.log(message.content);
    const embed = new Discord.MessageEmbed()
    .setTitle("Received DM")
    .setDescription(`This DM Is From ${message.author.username}#${message.author.discriminator} (${message.author.id})!`)
    .addField(message.author.username, message.content)
    .setTimestamp()
    .setFooter(`${Bot.user.username}™`);
      Bot.channels.cache.get('779768430093402114').send(embed);
  });
  
  Bot.on("ready", () =>{
    console.log(`Logged in as ${Bot.user.tag}!`);
    Bot.user.setActivity("http://nyxclient.com/"); 
 });
  
  Bot.login(Token)