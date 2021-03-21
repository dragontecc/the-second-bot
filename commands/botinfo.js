        // at the top of your file
        const Discord = require('discord.js');

module.exports = {
    name: 'botinfo',
    cooldown: 20,
    description: 'not ping',
    execute(message) {
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('The Second Bot Information')
	.setURL('https://www.indonesiaweb.net/')
	.setAuthor('The Second Bot')
	.setDescription('This bot was created on 2020 or 2021, this bot was created by someone that you did not know he was existed. Hope you enjoyed using the bot!, report bugs at : development@indonesiaweb.net\nSpecial Thank you to : RemyK, for letting us use his work for our music!')
	.setTimestamp()
	.setFooter('Indonesiaweb Team', 'https://www.indonesiaweb.net/wp-content/uploads/2020/10/idnweb-logo-black-removebg-preview.png');

message.channel.send(exampleEmbed);
    }
}
