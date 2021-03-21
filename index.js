/**
 * Module Imports
 */
const { Client, Collection, Guild } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { prefix, token, apiyoutube } = require("./config.json");
let PREFIX = prefix
const Playing = require("discord-playing");
const client = new Client({ disableMentions: "everyone" });
const MusicBot = require('discord-music-system');
const pollEmbed = require('discord.js-poll-embed');
const welcome = require("./commands/welcome");
welcome


client.login(token);
client.commands = new Collection();
client.prefix = prefix;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var time = process.uptime
/**
 * Client Events
 */
client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`[+] prefix | +help for info | uptime : ${time} |`, { type: "PLAYING" });
});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);


/**
 * Import all commands
 */
const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `Et, sabar napa tunggu sekitar ${timeLeft.toFixed(1)} detik lagi(s) sebelum make perintah \`${command.name}\`lagi bos, lu kira ga capek apa.. :angry:`
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("Hmm, tunggu bro.. Kayaknya ada masalah dah sama command ini. Lapor gih buruan!").catch(console.error);
  

  }});

// Buat music
const bot12 = new MusicBot({
  botPrefix: prefix , // Example: !
  ytApiKey: apiyoutube, // Video to explain how to get it: https://www.youtube.com/watch?v=VqML5F8hcRQ
  botClient: client // Your Discord client. Here we're using discord.js so it's the Discord.Client()
});

client.on('message', message => {
  if(message.author.bot) return; 
  // When the bot receive a message
  if(message.content.startsWith(bot12.prefix)) { // If the message starts with your prefix
  } 
 {
  if(message.content === 'no u') 
    message.channel.send(`Mantap ${message.author} jago bet dah, sampe kalah gw nih :pensive: `)
    console.log(
      `${message.author.username} said ${message.content} at ${message.createdAt} on ${message.guild.name} at ${message.guild.embedChannelID}`
    );
 if(message.content === 'gip alok')
    message.channel.send(`Hmm, alok ya? Maaf nih ${message.author}, gw gajualan alok.. Mungkin di toko sebelah ada`)
    }
    {
      bot12.onMessage(message); // The music-system must read the message, to check if it is a music command and execute it.
    }})


// Buat Welcome

welcome

