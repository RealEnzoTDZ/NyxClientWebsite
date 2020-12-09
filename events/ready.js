module.exports = async client => {
    client.user.setPresence({ game: { name: 'with others!' }, status: 'online' })
  .then()
  .catch(console.error);
    process.stdout.write("\n");
    console.log("-------------------------------");
    console.log("   The TDZ Layout By EnzoTDZ   ");
    console.log("-------------------------------");
    console.log(`[    OWNER]: It's The 13 Enzo#3017`);
    console.log(`[      BOT]: ${client.user.username} is ready!`);
    console.log(`[   GUILDS]: ${client.guilds.cache.size}`);
    console.log(`[ CHANNELS]: ${client.channels.cache.size}`);
    console.log(`[    USERS]: ${client.users.cache.size}`);
    console.log(`[BOOT TIME]: ${process.uptime() * 1000}ms`);
}