module.exports = {
    name: 'dark',
    path: 'fun',
    permissions: [], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    description: 'Dark Humour!',
    usage: 'dark',
    exec(client, message, args) {
        var items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        var item = items[Math.floor(Math.random() * items.length)];

        if (item == "1") {
            message.channel.send(`Why Was The Orphan's Favourite Toy A Boomerang?`).then((msg) => {
                setTimeout(function () {
                    msg.edit(`Because It Actually Came Back!`);
                }, 5000)
            });
        } else if (item == "2") {
            message.channel.send(`My ex had an accident. I told the paramedics the wrong blood type for her.`).then((msg) => {
                setTimeout(function () {
                    msg.edit(`Finally she’ll experience what rejection is really like.`);
                }, 5000)
            });
        } else if (item == "3") {
            message.channel.send(`A blind woman tells her boyfriend that she’s seeing someone..`).then((msg) => {
                setTimeout(function () {
                    msg.edit(`It’s either really terrible news or really great news!`);
                }, 5000)
            }); 
        } else if (item == "4") {
            message.channel.send(`Daddy, there is a man at the door. He says he is collecting for the nursing home.`).then((msg) => {
                setTimeout(function () {
                    msg.edit(`That's perfect. Tell him grandpa is coming in a moment.`);
                }, 5000)
            });
        } else if (item == "5") {
            message.channel.send(`Mommy, mommy, I found daddy!`).then((msg) => {
                setTimeout(function () {
                    msg.edit(`How often do I have to tell you not to dig around in the garden!`);
                }, 5000)
            });
        } else if (item == "6") {
            message.channel.send(`Why do orphans get an iphone x or above!`).then((msg) => {
                setTimeout(function () {
                    msg.edit(`Because they is no home button!`);
                }, 5000)
            });
        } else if (item == "7") {
            message.channel.send(`What does a baby and a grenade have in common?`).then((msg) => {
                setTimeout(function () {
                    msg.edit(`They both scream or yell when you throw them!`);
                }, 5000)
            });
        } else if (item == "8") {
            message.channel.send(`Today I pushed the kid in a wheelchair in a fire..`).then((msg) => {
                setTimeout(function () {
                    msg.edit(`Now he has the new hot wheels!`);
                }, 5000)
            });
        } else if (item == "9") {
            message.channel.send(`What do you get when you guzzle down sweets..`).then((msg) => {
                setTimeout(function () {
                    msg.edit(`Probably mother fucking diabetes!`);
                }, 5000)
            });
        }
    },
};