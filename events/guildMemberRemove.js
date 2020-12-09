const Canvas = require('canvas');
const Discord = require('discord.js');
const GuildSettings = require("../models/settings");

module.exports = async guildMember => {
    try {
        //var memberRole = "767723196744466452";
        //guildMember.roles.add(memberRole);
        // get autoRole from storedSettings and apply to member
        console.log(guildMember.user.username + " Has Left.");

        const applyText = (canvas, text) => {
            const ctx = canvas.getContext('2d');

            // Declare a base size of the font
            let fontSize = 70;

            do {
                // Assign the font to the context and decrement it so it can be measured again
                ctx.font = `${fontSize -= 10}px sans-serif`;
                // Compare pixel width of the text to the canvas minus the approximate avatar size
            } while (ctx.measureText(text).width > canvas.width - 300);

            // Return the result to use in the actual canvas
            return ctx.font;
        };

        var storedSettings = await GuildSettings.findOne({ gid: guildMember.guild.id });
        if (storedSettings.memberAdd && storedSettings.leaverChannelId != null) {
            const canvas = Canvas.createCanvas(700, 250);
            const ctx = canvas.getContext('2d');

            const background = await Canvas.loadImage('./assets/wallpaper.png');
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = '#74037b';
            ctx.strokeRect(0, 0, canvas.width, canvas.height);

            // Add an exclamation point here and below
            ctx.font = applyText(canvas, `${guildMember.displayName} Left!`);
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${guildMember.displayName} Left!`, canvas.width / 2.5, canvas.height / 1.8);

            ctx.beginPath();
            ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();

            const avatar = await Canvas.loadImage(guildMember.user.displayAvatarURL({ format: 'png' }));
            ctx.drawImage(avatar, 25, 25, 200, 200);

            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'leaver-image.png');
            guildMember.guild.channels.cache.get(storedSettings.leaverChannelId).send(`Farewell, <@${guildMember.user.id}>!`, attachment);
        }
    } catch (e) {
        console.log(e);
    }
}