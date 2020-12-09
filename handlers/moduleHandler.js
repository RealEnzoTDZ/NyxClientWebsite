const { Collection } = require("discord.js");
const fs = require("fs");
const path = require("path");
const Commands = new Collection();
const Aliases = new Collection();
const modules = fs.readdirSync("./commands").filter(file => fs.statSync(path.join("./commands", file)).isDirectory());
for (let module of modules) {
    process.stdout.write("\n");
    console.info(`---------------------------------------`);
    console.info(`[COMMAND LOG] Loading module: ${module}`);
    console.info(`---------------------------------------`);
    process.stdout.write("\n");
    let commandFiles = fs.readdirSync(path.resolve(`./commands/${module}`)).filter(file => !fs.statSync(path.resolve("./commands/", module, file)).isDirectory()).filter(file => file.endsWith(".js"));
    for (let file of commandFiles) {
        console.info(`[COMMAND LOG] Loading command: ${file}`);
        file = require(`../commands/${module}/${file}`);
        file.module = module;
        Commands.set(file.name, file);
    }
}
module.exports = client => {
    client.commands = Commands;
    client.aliases = Aliases;
}