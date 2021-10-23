const { Discord, Intents, Client } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const token = "token"
client.on("ready") => {
console.log(`Zalogowano na ${client.user.tag}`)}
