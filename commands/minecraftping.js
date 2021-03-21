const Discord = require(`discord.js`);
const { PingMC } = require("pingmc"); // ES5
module.exports = {
    name: 'minecraftping',
    cooldown: 5,
    description: 'This thing does work to ping Minecraft server, uhh I hope so..',
    args: '<serverip>',
    execute(message, args) {
        const CaraPakaiCommand = new Discord.MessageEmbed()
        .setColor('#30b04a')
        .setTitle('Argh, this is how to use the command!')
        .setAuthor("The Second Bot")
        .setDescription(`+minecraftping serverIP\n \n Like this : +minecraftping play.arceru.id`)
        .setTimestamp()
        .setFooter("The Second Bot");
    
        
   
    if(!args.length) {
        message.channel.send(CaraPakaiCommand);
        return;
    }
    new PingMC(`${args}`).ping()
.then((response) => {
    const exampleEmbed = new Discord.MessageEmbed()
       .setColor('#30b04a')
       .setTitle(`Ping Result of ${args}`)
       .setAuthor("The Second Bot")
       .setThumbnail(`https://eu.mc-api.net/v3/server/favicon/${args}`)
       .setDescription(`This is the ping to the server you asked for!`)
       .addFields(
		{ name: `Ping to ${args}`, value: `${response.ping}ms`, inline: true },
        { name: 'Ping to Discord API', value: `${message.client.ws.ping}ms`, inline: true }
	) 
       .setTimestamp()
       .setFooter("The Second Bot");
    message.channel.send(exampleEmbed)
    }
    )}}