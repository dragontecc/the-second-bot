   // at the top of your file
   const Discord = require('discord.js');

   module.exports = {
       name: 'ping',
       cooldown: 5,
       description: 'ping',
       execute(message) {
   const exampleEmbed = new Discord.MessageEmbed()
       .setColor('#0099ff')
       .setTitle('Pong! :ping_pong:')
       .setAuthor('The Second Bot')
       .setDescription(`Almost failed to catch that huh\n But I managed catched it with this ping ${message.client.ws.ping}ms`)
       .setTimestamp()
       .setFooter('Indonesiaweb Team', 'https://www.indonesiaweb.net/wp-content/uploads/2020/10/idnweb-logo-black-removebg-preview.png');
   
   message.channel.send(exampleEmbed);
       }
   }

















